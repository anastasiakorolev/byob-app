var os = require('os');
var projectName = "BYOB";
var botUsername = "Deploy Bot";

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  var conf = {
    "default": {
      workspace: process.env.SHIPIT_WORKSPACE || os.tmpdir() + 'dp/workspace',
      deployTo: '/var/www/vhosts/byob-app',
      repositoryUrl: 'git@github.com:anakorolev/BYOB-App.git',
      branch: process.env.SHIPIT_BRANCH || 'develop',
      ignores: ['.git', 'static', 'node_modules'],
      keepReleases: 5,
      shallowClone: true
    },
    "local": {
      servers: 'vagrant@byob.app' // ~/.vagrant.d/insecure_private_key
    }
    // "internal": {
    //   servers: 'php-deploy@smb-web1.va.pl-internal.net'
    // },
    // "staging": {
    //   servers: 'php-deploy@rep-wpstaging1.va.placester.net'
    // },
    // "plstaging": {
    //   servers: 'php-deploy@smb-web1.va.pl-staging.net'
    // },
    // "production": {
    //   branch: 'master',
    //   servers: ['php-deploy@smb-web1.va.placester.net', 'php-deploy@smb-web2.va.placester.net', 'php-deploy@smb-web3.va.placester.net']
    // }
  };

  // for (var i = 2; i <= 15; i++) {
  //   conf['staging' + i] = {
  //     servers: 'php-deploy@rep-wpstaging1.va.placester.net',
  //     deployTo: '/var/www/vhosts/inception-app' + i
  //   };
  // }

  shipit.initConfig(conf);

  shipit.blTask('build', function(){
    shipit.log('Building BYOB Assests');

    return shipit.local('npm install --production && NODE_ENV=' + shipit.environment + ' npm run build', {cwd: shipit.config.workspace})
      .then(function(){
        shipit.log('Successfully built assets');
      })
      .catch(function(err){
        shipit.log('Failed to build assets');
        throw err;
      });
  });

  shipit.on('fetched', function(){
    shipit.start('build');
  });

};
