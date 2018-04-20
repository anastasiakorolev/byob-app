(function() {
	// Todo Collection
	// ---------------
	Byob.Collections.RobotParts = Backbone.Collection.extend({

		initialize: function initialize() {
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				typeName: 'Head',
				name: 'Iron Giant',
				src: 'models/IronGiantFullHead_Positioned.json',
				srcCentered: 'models/IronGiantFullHeadCentered.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: ['obj/IronGiantHead.obj', 'obj/IronGiantJaw.obj']
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				typeName: 'Body',
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
				type: 'lArm',
				typeName: 'Left Arm',
				name: 'Iron Giant',
				src: 'models/LeftArmObj_Positioned.json',
				srcCentered: 'models/LeftArmObjCentered.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/LeftArmObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				typeName: 'Right Arm',
				name: 'Iron Giant',
				src: 'models/RightArmObj_Positioned.json',
				srcCentered: 'models/RightArmObjCentered.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/RightArmObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				typeName: 'Left Leg',
				name: 'Iron Giant',
				src: 'models/LeftLegObj_Positioned.json',
				srcCentered: 'models/LeftLegObjCentered.json',
				scale: 0.8,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/LeftLegObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				typeName: 'Right Leg',
				name: 'Iron Giant',
				src: 'models/RightLegObj_Positioned.json',
				srcCentered: 'models/RightLegObjCentered.json',
				scale: 0.8,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/RightLegObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				typeName: 'Head',
				name: 'WALLE',
				src: 'models/WALLE_E_HEAD_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_HEAD_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/WALLE_E_HEAD_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				typeName: 'Body',
				name: 'WALLE',
				src: 'models/WALLE_E_BODY_HOLLOW_1MM.json',
				srcCentered: 'models/WALLE_E_BODY_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/WALLE_E_BODY_HOLLOW_1MM.obj',
				rArm: [],
				rLeg: [],
				lArm: [],
				lLeg: []
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				typeName: 'Right Arm',
				name: 'WALLE',
				src: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/WALLE_E_RIGHT_ARM_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				typeName: 'Left Arm',
				name: 'WALLE',
				src: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/WALLE_E_LEFT_ARM_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				typeName: 'Left Leg',
				name: 'WALLE',
				src: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/WALLE_E_LEFT_LEG_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				typeName: 'Right Leg',
				name: 'WALLE',
				src: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/WALLE_E_RIGHT_LEG_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				typeName: 'Head',
				name: 'Plankton Bot',
				src: 'models/CylinderBotBodyHead.json',
				srcCentered: 'models/CylinderBotBodyHead.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/CylinderBotBodyHead.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				typeName: 'Body',
				name: 'Plankton Bot',
				src: 'models/CylinderBotBodyHead.json',
				srcCentered: 'models/CylinderBotBodyHead.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/CylinderBotBodyHead.obj',
				rArm: [],
				rLeg: [],
				lArm: [],
				lLeg: []
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				typeName: 'Left Arm',
				name: 'Plankton Bot',
				src: 'models/CylinderBotLeftArm_Positioned.json',
				srcCentered: 'models/CylinderBotLeftArm.json',
				scale: 1.2,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/CylinderBotLeftArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				typeName: 'Left Leg',
				name: 'Plankton Bot',
				src: 'models/CylinderBotLeftLeg_Positioned.json',
				srcCentered: 'models/CylinderBotLeftLeg.json',
				scale: 1.2,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/CylinderBotLeftLeg.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				typeName: 'Right Arm',
				name: 'Plankton Bot',
				src: 'models/CylinderBotRightArm_Positioned.json',
				srcCentered: 'models/CylinderBotRightArm.json',
				scale: 1.2,
				posx: 0,
				posy: 15,
				posz: 0,
				downloadLink: 'obj/CylinderBotRightArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				typeName: 'Right Leg',
				name: 'Plankton Bot',
				src: 'models/CylinderBotRightLeg_Positioned.json',
				srcCentered: 'models/CylinderBotRightLeg.json',
				scale: 1.2,
				posx: 0,
				posy: 15,
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