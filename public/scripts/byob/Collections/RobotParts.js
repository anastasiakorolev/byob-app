(function() {
	// Todo Collection
	// ---------------
	Byob.Collections.RobotParts = Backbone.Collection.extend({

		initialize: function initialize() {
			this.add(new Byob.Models.RobotPart({
				type: 'Head',
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
				type: 'Body',
				name: 'Iron Giant',
				src: 'models/IronGiantBody.json',
				srcCentered: 'models/IronGiantBodyCentered.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/IronGiantBody.obj',
				rArm: [],
				rLeg: [],
				lArm: [],
				lLeg: []
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Left Arm',
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
				type: 'Right Arm',
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
				type: 'Left Leg',
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
				type: 'Right Leg',
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
				type: 'Head',
				name: 'WALLE',
				src: 'models/WALLE_E_HEAD_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_HEAD_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/WALLE_E_HEAD_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Body',
				name: 'WALLE',
				src: 'models/WALLE_E_BODY_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_BODY_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/WALLE_E_BODY_HOLLOW_1MM.obj',
				rArm: [],
				rLeg: [],
				lArm: [],
				lLeg: []
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Right Arm',
				name: 'WALLE',
				src: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/WALLE_E_RIGHT_ARM_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Left Arm',
				name: 'WALLE',
				src: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/WALLE_E_LEFT_ARM_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Left Leg',
				name: 'WALLE',
				src: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/WALLE_E_LEFT_LEG_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Right Leg',
				name: 'WALLE',
				src: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/WALLE_E_RIGHT_LEG_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Head',
				name: 'Plankton Bot',
				src: 'models/CylinderBotBodyHead.json',
				srcCentered: 'models/CylinderBotBodyHead.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/CylinderBotBodyHead.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Body',
				name: 'Plankton Bot',
				src: 'models/CylinderBotBodyHead.json',
				srcCentered: 'models/CylinderBotBodyHead.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/CylinderBotBodyHead.obj',
				rArm: [],
				rLeg: [],
				lArm: [],
				lLeg: []
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Left Arm',
				name: 'Plankton Bot',
				src: 'models/CylinderBotLeftArm.json',
				srcCentered: 'models/CylinderBotLeftArm.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/CylinderBotLeftArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Left Leg',
				name: 'Plankton Bot',
				src: 'models/CylinderBotLeftLeg.json',
				srcCentered: 'models/CylinderBotLeftLeg.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/CylinderBotLeftLeg.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Right Arm',
				name: 'Plankton Bot',
				src: 'models/CylinderBotRightArm.json',
				srcCentered: 'models/CylinderBotRightArm.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/CylinderBotRightArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'Right Leg',
				name: 'Plankton Bot',
				src: 'models/CylinderBotRightLeg.json',
				srcCentered: 'models/CylinderBotRightLeg.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0,
				downloadLink: 'obj/CylinderBotRightLeg.obj'
			}));
		},

		filterCollection: function (type) {
			return _.filter(this, function(m) {
				return m.type == type;
			});
		}
	});
})();