module.exports = function (grunt) {

  var path = require('path');

  grunt.registerMultiTask('template', 'Render a Lo-Dash template', function () {
    var options = this.options({
      webRoot: '.',
      data: {}
    });

    this.files.forEach(function(f){
      console.log(f);
      var src = f.src.filter(function(filepath){
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      var dest = f.dest;

      var data = options.data;

      var scripts = data.scripts || {};

      for (var s in scripts) {
        scripts[s] = scripts[s].map(function(script) {
          return path.relative(options.webRoot, script);
        });
      }

      if (data.stylesheets) {
        data.stylesheets = data.stylesheets.map(function(stylesheet) {
          return path.relative(options.webRoot, stylesheet);
        });
      }

      grunt.log.ok('Reading template ' + src);
      var template = grunt.file.read(src);

      grunt.log.ok('Rendering template ' + src);
      var rendered = grunt.template.process(template, options);

      grunt.log.ok('Writing rendered template to ' + dest);
      var writeOpts = {};
      grunt.file.write(dest, rendered, writeOpts);

    });
  });

};
