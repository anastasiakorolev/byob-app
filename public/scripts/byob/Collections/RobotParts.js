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
				rArm: [-5,19,0],
				rLeg: [-2.5,10,0],
				lArm: [5,19,0],
				lLeg: [2.5,10,0],
				head: [0,20,0]
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				typeName: 'Left Arm',
				name: 'Iron Giant',
				src: 'models/LeftArmObj_Positioned.json',
				srcCentered: 'models/LeftArmObjCentered.json',
				srcRot: 'models/LeftArmObj_Positioned_Rot.json',
				scale: 1,
				downloadLink: 'obj/LeftArmObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				typeName: 'Right Arm',
				name: 'Iron Giant',
				src: 'models/RightArmObj_Positioned.json',
				srcCentered: 'models/RightArmObjCentered.json',
				srcRot: 'models/RightArmObj_Positioned_Rot.json',
				scale: 1,
				downloadLink: 'obj/RightArmObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				typeName: 'Left Leg',
				name: 'Iron Giant',
				src: 'models/LeftLegObj_Positioned_MERGED.json',
				srcCentered: 'models/LeftLegObjCentered_MERGED.json',
				scale: 0.8,
				downloadLink: 'obj/LeftLegObj_Positioned_MERGED.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				typeName: 'Right Leg',
				name: 'Iron Giant',
				src: 'models/RightLegObj_Positioned.json',
				srcCentered: 'models/RightLegObjCentered.json',
				scale: 0.8,
				downloadLink: 'obj/RightLegObj.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				typeName: 'Head',
				name: 'WALLE',
				src: 'models/WALLE_E_HEAD_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_HEAD_HOLLOW_1MM.json',
				scale: 1,
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
				rArm: [-3,18,-0.25],
				rLeg: [-3,10,-0.25],
				lArm: [3,18,-0.25],
				lLeg: [3,10,-0.25],
				head: [0,20.5,-0.25]
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				typeName: 'Right Arm',
				name: 'WALLE',
				src: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_RIGHT_ARM_HOLLOW_1MM.json',
				scale: 1,
				downloadLink: 'obj/WALLE_E_RIGHT_ARM_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				typeName: 'Left Arm',
				name: 'WALLE',
				src: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_LEFT_ARM_HOLLOW_1MM.json',
				scale: 1,
				downloadLink: 'obj/WALLE_E_LEFT_ARM_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				typeName: 'Left Leg',
				name: 'WALLE',
				src: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_LEFT_LEG_HOLLOW_1MM.json',
				scale: 1,
				downloadLink: 'obj/WALLE_E_LEFT_LEG_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				typeName: 'Right Leg',
				name: 'WALLE',
				src: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM_Positioned.json',
				srcCentered: 'models/WALLE_E_RIGHT_LEG_HOLLOW_1MM.json',
				scale: 1,
				downloadLink: 'obj/WALLE_E_RIGHT_LEG_HOLLOW_1MM.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				typeName: 'Head',
				name: 'Plankton Bot',
				src: 'models/CylinderBotBodyHead.json',
				srcCentered: 'models/CylinderBotBodyHead.json',
				scale: 1,
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
				rArm: [-2.75,17.2,0],
				rLeg: [-2.75,12.5,0],
				lArm: [2.75,17.2,0],
				lLeg: [2.75,12.5,0],
				head: [0,0,0]
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lArm',
				typeName: 'Left Arm',
				name: 'Plankton Bot',
				src: 'models/CylinderBotLeftArm_Positioned_Merged.json',
				srcCentered: 'models/CylinderBotLeftArm_MERGED.json',
				scale: 1.2,
				downloadLink: 'obj/CylinderBotLeftArm_Positioned_Merged.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'lLeg',
				typeName: 'Left Leg',
				name: 'Plankton Bot',
				src: 'models/CylinderBotLeftLeg_Positioned_MERGED.json',
				srcCentered: 'models/CylinderBotLeftLeg_Merged.json',
				scale: 1.2,
				downloadLink: 'obj/CylinderBotLeftLeg_MERGED.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rArm',
				typeName: 'Right Arm',
				name: 'Plankton Bot',
				src: 'models/CylinderBotRightArm_Positioned.json',
				srcCentered: 'models/CylinderBotRightArm.json',
				scale: 1.2,
				downloadLink: 'obj/CylinderBotRightArm.obj'
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'rLeg',
				typeName: 'Right Leg',
				name: 'Plankton Bot',
				src: 'models/CylinderBotRightLeg_Positioned_MERGED.json',
				srcCentered: 'models/CylinderBotRightLeg_Merged.json',
				scale: 1.2,
				downloadLink: 'obj/CylinderBotRightLeg_MERGED.obj'
			}));
		},

		filterCollection: function (type) {
			return _.filter(this, function(m) {
				return m.type == type;
			});
		}
	});
})();