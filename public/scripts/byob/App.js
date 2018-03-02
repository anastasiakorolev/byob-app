var Byob = (function (Backbone, Marionette) {

	var App = new Marionette.Application({

		template: JST.root,

		regions: {
			mainRegion: '#byob'
		},

		initialize: function () {
			console.log('new App');
		}
	});

	App.Regions = {};

	App.Views = {};

	App.Models = {};

	App.Collections = {};

	// After we initialize the app, we want to kick off the router
	// and controller, which will handle initializing our Views
	App.on('start', function () {
		App.root = new App.Views.RootView();
    	App.mainRegion.show(App.root);
		console.log('start');
		var controller = new Byob.ByobController();
		controller.router = new Byob.ByobRouter({
			controller: controller
		});

		controller.start();
		Backbone.history.start();
	});

	App.on('before:start', function () {
		// App.setRootLayout();
	});

	return App;

})(Backbone, Marionette);
