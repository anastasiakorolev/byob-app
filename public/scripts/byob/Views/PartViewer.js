(function () {
	'use strict';

	// Selection Base View
	// -------------------
	//
	// Display the sidebar used for part selection
	// 
	Byob.PartViewerView = Marionette.LayoutView.extend({
		template: JST.part_viewer,

		events: {
			'click .arrow': function(e) { this.miniCanvas.onPartUpdate(e, this.partType); },
			'click .part-selection-button': function(e) { this.miniCanvas.updateDefaultRobot(); }
		},

		initialize: function (params) {
			this.hasParams = false;
			console.log(params);
			if (params && params.partType) {
				this.hasParams = true;
				this.partType = params.partType;
				this.color = params.color;
				console.log(this.partType);
			}
		},

		templateHelpers: function () {
			return {
				title: this.partType,
				hasParams: this.hasParams,
				defaultState: 'Click a part on the robot to customize it.'
			};
		},

		onShow: function () {
			if (this.hasParams) {
				this.params = {
					partType: this.partType,
					color: this.color
				};

				this.miniCanvas = new Byob.PartMiniCanvasView(this.params);
				this.miniCanvas.initialize(this.params);
			}
		}
		
	});
})();