(function() {
	// Todo Collection
	// ---------------
	Byob.Collections.RobotParts = Backbone.Collection.extend({

		initialize: function initialize() {
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				name: 'Iron Giant',
				src: 'models/IronGiantFullHead.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: ['obj/IronGiantHead.obj', 'obj/IronGiantJaw.obj']
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				name: 'Iron Giant',
				src: 'models/IronGiantBody.json',
				scale: 0.75,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/IronGiantBody.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				name: 'Iron Giant',
				src: 'models/leftArmObj.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/LeftArmObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				name: 'Iron Giant',
				src: 'models/rightArmObj.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/RightArmObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				name: 'Iron Giant',
				src: 'models/leftLegObj.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/LeftLegObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				name: 'Iron Giant',
				src: 'models/rightLegObj.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/RightLegObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				name: 'Beauty Bot',
				src: 'models/BeautyBotHead.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotHead.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				name: 'Beauty Bot',
				src: 'models/BeautyBotBody.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotBody.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				name: 'Beauty Bot',
				src: 'models/BeautyBotRightArm.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotRightArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				name: 'Beauty Bot',
				src: 'models/BeautyBotLeftArm.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotLeftArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				name: 'Beauty Bot',
				src: 'models/BeautyBotLeftLeg.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotLeftLeg.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				name: 'Beauty Bot',
				src: 'models/BeautyBotRightLeg.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotRightLeg.obj'
			}));
		},

		filterCollection: function (type) {
			return _.filter(this, function(m) {
				return m.type == type;
			});
		}
	});
})();