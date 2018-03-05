var path = require('path');

var assets = require('./assets');


function prependScriptPath(scriptPath) {
  return path.join('public', scriptPath);
}

module.exports = function (grunt) {
  var vendorScripts = assets.vendor.map(prependScriptPath);
  var byobScripts = assets.byob.map(prependScriptPath);

  var files = {
    js: '<%= dirs.dist %>/<%= pkg.name %>.js',
    js_min: '<%= dirs.dist %>/<%= pkg.name %>.min.js',
    css: '<%= dirs.dist %>/<%= pkg.name %>.css',
    css_min: '<%= dirs.dist %>/<%= pkg.name %>.min.css',
    templates: '<%= dirs.scripts %>/<%= pkg.name %>/templates.js',
    boot_tmpl: '<%= dirs.root %>/boot.tmpl',
    boot: '<%= dirs.scripts %>/boot.js',
    boot_min: '<%= dirs.dist %>/boot.js',
    asset_map: '<%= dirs.dist %>/assets.json'
  };

  var uglifyFiles = {
    '<%= files.js_min %>': vendorScripts.concat(byobScripts)
  };

  var hashJs = {
    src: Object.keys(uglifyFiles),
    dest: '<%= dirs.dist %>/'
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*!\n' +
              ' * BYOB v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
              ' * Copyright 2018-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' */\n'
    },

    dirs: {
      root: '.',
      web: '<%= dirs.root %>/public',
      scripts: '<%= dirs.web %>/scripts',
      templates: '<%= dirs.web %>/templates',
      sass: '<%= dirs.web %>/sass',
      js: '<%= dirs.web %>/js',
      css: '<%= dirs.web %>/css',
      //tests: '<%= dirs.root %>/test',
      dist: '<%= dirs.web %>/dist'
    },

    files: files,

    template: {
      options: {
        webRoot: '<%= dirs.web %>'
      },
      dev: {
        options: {
          data: {
            stylesheets: ['<%= files.css %>'],
            scripts: {
              vendor: vendorScripts,
              app:  byobScripts
            },
            before: ['<script src="http://localhost:35729/livereload.js"></script>'],
            after: ['<script>$(function(){Byob.start();});</script>']
          }
        },
        files: {
          '<%= dirs.web %>/dev.html': '<%= dirs.root %>/index.tmpl'
        }
      },
      prod: {
        options: {
          data: {
            favicon: true,
            scripts: {
              app: ['<%= files.boot_min %>']
            },
            before: []
          }
        },
        files: {
          '<%= dirs.web %>/index.html': '<%= dirs.root %>/index.tmpl'
        }
      }
    },

    /**
     * jsHint rules can be found at http://jshint.com/docs/options/
     */
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: [
          // '<%= dirs.tests %>/vendor/**/*.js',
          '<%= dirs.scripts %>/vendor/**/*.js',
          '<%= dirs.nm %>/**/*.js',
          '<%= dirs.scripts %>/byob/templates.js'
        ]
      },
      all: {
        src: ['Gruntfile.js', byobScripts]
      }
    },

    handlebars: {
      precompile: {
        options: {
          namespace: 'JST',
          processName: function (filePath) {
            return require('path').basename(filePath, '.hbs');
          },
          processContent: function (content) {
            content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
            content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]+$/, '');
            return content;
          }
        },
        files: {
          '<%= files.templates %>': '<%= dirs.templates %>/**/*.hbs'
        }
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n',
        sourceMap: true
      },
      dist: {
        files: uglifyFiles
      },
      bootfile: {
        options: {
          sourceMap: false
        },
        files: {
          '<%= files.boot_min %>': '<%= files.boot %>'
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          '<%= files.css %>': '<%= dirs.sass %>/main.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 2 version', 'ie 8', 'ie 9']})
        ]
      },
      sass: {
        src: '<%= files.css %>'
      }
    },

    cssmin: {
      dist: {
        files: {
          '<%= files.css_min %>': '<%= files.css %>'
        }
      },
      hash: {
        files: [{
          expand: true,
          cwd: '<%= dirs.dist %>',
          src: '**/*.css',
          dest: '<%= dirs.dist %>'
        }]
      }
    },

    hash: {
      options: {
        mapping: '<%= files.asset_map %>',
        srcBasePath: '<%= dirs.web %>',
        destBasePath: '<%= dirs.web %>',
        hashLength: 10
      },
      js: hashJs,
      css: {
        src: '<%= files.css_min %>',
        dest: '<%= dirs.dist %>/'
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: './public'
        }
      }
    },

    watch: {
      options: {
        livereload: 35729
      },
      sass: {
        files: ['<%= dirs.css %>/**/*.css', '<%= dirs.css %>/**/*.css'],
        tasks: ['cssmin:dist']
      },
      handlebars: {
        files: '<%= dirs.templates %>/**/*.hbs',
        tasks: ['newer:handlebars']
      },
      scripts: {
        files: byobScripts
          .concat(['!public/scripts/inception/templates.js']),
        tasks: ['newer:jshint']
      },
      templates: {
        files: '<%= dirs.root %>/index.html',
        tasks: ['template']
      },
      vendor: {
        files: vendorScripts,
        tasks: ['newer:jshint']
      }
    },

    clean: {
      dist: '<%= dirs.dist %>'
    },

    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin HEAD',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    }

  });

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-jasmine-istanbul'],
    scope: 'dependencies'
  });

  grunt.loadNpmTasks('grunt-newer');

  // /**
  //  * Loads JSON configurations into 'window.env', namespaced first by
  //  * environment name and second by subdirectory. Properties in
  //  * config/local.json will be stored in 'window.env.local' and properties in
  //  * config/services/local.json will be stored in 'window.env.local.services'.
  //  *
  //  * The environment set at build will be stored in window.env.env. Values at
  //  * time of implementation are 'local', 'staging', and 'production'.
  //  */
  // grunt.registerTask('loadBuildConfig', function(){
  //   var DPApp = DPApp || {};

  //   var config = {
  //     env: grunt.option('env') || process.env.NODE_ENV || 'staging',
  //     version: grunt.config('pkg').version
  //   };

  //   grunt.file.recurse('./config', function(path, rootdir, subdir, filename) {
  //     function endsWith(str, strEnd) {
  //       return str.indexOf(strEnd) === (str.length - strEnd.length);
  //     }
  //     function extend(obj) {
  //       var args = Array.prototype.slice.call(arguments, 1);
  //       return args.reduce(function(agg, arg) {
  //         for (var attr in arg) {
  //           agg[attr] = arg[attr];
  //         }
  //         return agg;
  //       }, obj);
  //     }
  //     if (endsWith(filename, '.json')) {
  //       var env = filename.replace('.json', '');
  //       var value = grunt.file.readJSON(path);

  //       config[env] = config[env] || {};

  //       if (subdir) {
  //         config[env][subdir] = config[env][subdir] || {};
  //         extend(config[env][subdir], value);
  //       } else {
  //         extend(config[env], value);
  //       }
  //     }
  //   });

  //   var configPath = grunt.config('dirs').scripts + "/inception/config.js";
  //   var configValue = "window.env = " + JSON.stringify(config) + ";\n";
  //   grunt.log.ok('Writing config file ' + configPath);
  //   grunt.file.write(configPath, configValue);
  // });

  grunt.loadTasks('./tasks');

  grunt.registerTask('default', '', ['build']);
  grunt.registerTask('dev', '', ['template', 'newer:jshint', 'handlebars', 'sass', 'postcss', 'connect', 'watch']);
  grunt.registerTask('build', 'Compile scripts and styles', ['clean:dist', 'template', 'jshint', 'handlebars', 'uglify:dist', 'sass', 'postcss', 'cssmin:dist', 'hash:js', 'hash:css', 'uglify:bootfile']);
};
