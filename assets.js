var vendorScripts = [
  // 'scripts/vendor/base.js',
  'scripts/vendor/jquery.js',
  'scripts/vendor/underscore.js',
  'scripts/vendor/backbone.js',
  'scripts/vendor/backbone.localStorage.js',
  'scripts/vendor/backbone.radio.js',
  'scripts/vendor/handlebars.runtime.js',
  'scripts/vendor/modernizr.js',
  'scripts/vendor/es6-promise.auto.js',
  'scripts/vendor/backbone.routefilter.js',
  'scripts/vendor/backbone.stickit.js',
  'scripts/vendor/backbone.marionette.js',
  'scripts/vendor/bootstrap-tagsinput.js',
  'scripts/vendor/bootstrap.js',
  'scripts/vendor/bootstrap-multiselect.js',
  'scripts/vendor/three.min.js',
  'scripts/vendor/TrackballControls.js',
  'scripts/vendor/jszip.js'
];

var byobScripts = [
  'scripts/byob/templates.js',
  'scripts/byob/App.js',
  'scripts/byob/Views/Root.js',
  'scripts/byob/ByobController.js',
  'scripts/byob/ByobRouter.js',
  'scripts/byob/Collections/RobotParts.js',
  'scripts/byob/Models/RobotPart.js',
  'scripts/byob/Views/Footer.js',
  'scripts/byob/Views/Header.js',
  'scripts/byob/Views/PartViewer.js',
  'scripts/byob/Views/Combined.js',
  'scripts/byob/Views/Selection.js',
  'scripts/byob/Views/PartMiniCanvas.js',
  'scripts/byob/Canvas.js'
];

module.exports = {
  byob: byobScripts,
  vendor: vendorScripts
};