(function () {
	'use strict';

	// Selection Base View
	// -------------------
	//
	// Display the sidebar used for part selection
	// 
	Byob.CombinedView = Marionette.LayoutView.extend({
		template: JST.combined,

		ui: {
			canvas: '#canvas',
			selector: '#selector'
		},

		events: {
			'click #canvas': function (e) {
				this.canvas.onCanvasMouseDown(e);
			}
		},

		initialize: function () {
			console.log('in combined view');
		},

		onShow: function () {
			this.canvas = new Byob.CanvasView();
			this.canvas.render();
			console.log(this.canvas);
			console.log(Byob.root.canvas);
			console.log(this.canvas);
			// this.canvas.show(canvas);
			console.log(this.ui.canvas);
			this.ui.canvas.show(this.canvas);
			var selection = new Byob.SelectionView();
			this.ui.selector.show(selection);
		}
	});
})();