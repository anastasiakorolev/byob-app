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
			typeName: 'Head',
			name: 'Iron Giant',
			src: 'models/IronGiantFullHead_Positioned.json',
			srcCentered: 'models/IronGiantFullHeadCentered.json',
			scale: 0.5,
			posx: 0,
			posy: 19,
			posz: 3,
			downloadLink: ['obj/IronGiantHead.obj', 'obj/IronGiantJaw.obj']
		});
		App.Robot.body = new Byob.Models.RobotPart({
			type: 'body',
			typeName: 'Body',
			name: 'Iron Giant',
			src: 'models/IronGiantBody.json',
			srcCentered: 'models/IronGiantBodyCentered.json',
			scale: 0.5,
			posx: 0,
			posy: 15,
			posz: 0,
			downloadLink: 'obj/IronGiantBody.obj',
			rArm: [-5,18,0],
			rLeg: [-2.5,10,0],
			lArm: [5,18,0],
			lLeg: [2.5,10,0],
			head: [0,20,0]
		});
		App.Robot.lArm = new Byob.Models.RobotPart({
			type: 'lArm',
			typeName: 'Left Arm',
			name: 'Iron Giant',
			src: 'models/LeftArmObj_Positioned.json',
			srcCentered: 'models/LeftArmObjCentered.json',
			scale: 0.5,
			posx: 5,
			posy: 18,
			posz: 0,
			downloadLink: 'obj/LeftArmObj.obj'
		});
		App.Robot.rArm = new Byob.Models.RobotPart({
			type: 'rArm',
			typeName: 'Right Arm',
			name: 'Iron Giant',
			src: 'models/RightArmObj_Positioned.json',
			srcCentered: 'models/RightArmObjCentered.json',
			scale: 0.5,
			posx: -5,
			posy: 18,
			posz: 0,
			downloadLink: 'obj/RightArmObj.obj'
		});
		App.Robot.lLeg = new Byob.Models.RobotPart({
			type: 'lLeg',
			typeName: 'Left Leg',
			name: 'Iron Giant',
			src: 'models/LeftLegObj_Positioned.json',
			srcCentered: 'models/LeftLegObjCentered.json',
			scale: 0.5,
			posx: 2.5,
			posy: 10,
			posz: 0,
			downloadLink: 'obj/LeftLegObj.obj'
		});
		App.Robot.rLeg = new Byob.Models.RobotPart({
			type: 'rLeg',
			typeName: 'Right Leg',
			name: 'Iron Giant',
			src: 'models/RightLegObj_Positioned.json',
			srcCentered: 'models/RightLegObjCentered.json',
			scale: 0.5,
			posx: -2.5,
			posy: 10,
			posz: 0,
			downloadLink: 'obj/RightLegObj.obj'
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
