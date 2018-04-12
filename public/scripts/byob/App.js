var Byob = (function (Backbone, Marionette) {

	var App = new Marionette.Application({

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

	App.Robot = {
		head: '',
		body: '',
		lArm: '',
		rArm: '',
		lLeg: '',
		rLeg: ''
	};

	// After we initialize the app, we want to kick off the router
	// and controller, which will handle initializing our Views
	App.on('start', function () {
		console.log('starting');
		App.root = new App.Views.RootView();
		console.log(App);
		console.log(App.root);
    	App.mainRegion.show(App.root);
		console.log('start');

		App.Robot.head = new Byob.Models.RobotPart({
			type: 'head',
			name: 'Iron Giant',
			src: 'models/fuckthisshit.json',
			scale: 1,
			posx: 0,
			posy: 15,
			posz: 0
		});
		App.Robot.body = new Byob.Models.RobotPart({
			type: 'body',
			name: 'Iron Giant',
			src: 'models/IronGiantBody.json',
			scale: 1,
			posx: 0,
			posy: 0,
			posz: 0
		});
		App.Robot.lArm = new Byob.Models.RobotPart({
			type: 'lArm',
			name: 'Iron Giant',
			src: 'models/leftArmObj.json',
			scale: 1,
			posx: 0,
			posy: 0,
			posz: 0
		});
		App.Robot.rArm = new Byob.Models.RobotPart({
			type: 'rArm',
			name: 'Iron Giant',
			src: 'models/rightArmObj.json',
			scale: 1,
			posx: 0,
			posy: 0,
			posz: 0
		});
		App.Robot.lLeg = new Byob.Models.RobotPart({
			type: 'lLeg',
			name: 'Iron Giant',
			src: 'models/leftLegObj.json',
			scale: 1,
			posx: 0,
			posy: 0,
			posz: 0
		});
		App.Robot.rLeg = new Byob.Models.RobotPart({
			type: 'rLeg',
			name: 'Iron Giant',
			src: 'models/rightLegObj.json',
			scale: 1,
			posx: 0,
			posy: 0,
			posz: 0
		});
		console.log(App.Robot);
		var controller = new Byob.ByobController();
		controller.router = new Byob.ByobRouter({
			controller: controller
		});

		controller.start();
		Backbone.history.start();
	});

	App.on('before:start', function () {
		console.log('about to start');
		// App.setRootLayout();
	});

	return App;

})(Backbone, Marionette);
