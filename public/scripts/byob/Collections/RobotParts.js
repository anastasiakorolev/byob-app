(function() {
	// Todo Collection
	// ---------------
	Byob.Collections.RobotParts = Backbone.Collection.extend({

		initialize: function initialize() {
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				name: 'Iron Giant',
				src: 'models/IronGiantFullHead.json',
				srcCentered: 'models/IronGiantFullHeadCentered.json',
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
				srcCentered: 'models/IronGiantBodyCentered.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/IronGiantBody.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				name: 'Iron Giant',
				src: 'models/leftArmObj.json',
				srcCentered: 'models/LeftArmObjCentered.json',
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
				srcCentered: 'models/RightArmObjCentered.json',
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
				srcCentered: 'models/LeftLegObjCentered.json',
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
				srcCentered: 'models/RightLegObjCentered.json',
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
				srcCentered: 'models/WALLE_E_HEAD_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotHead.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				name: 'Beauty Bot',
				src: 'models/BeautyBotBody.json',
				srcCentered: 'models/models/WALLE_E_BODY_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotBody.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				name: 'Beauty Bot',
				src: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotRightArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				name: 'Beauty Bot',
				src: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotLeftArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				name: 'Beauty Bot',
				src: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/BeautyBotLeftLeg.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				name: 'Beauty Bot',
				src: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM.json',
				scale: 1,
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