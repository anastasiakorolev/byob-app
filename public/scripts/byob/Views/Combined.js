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

		initialize: function () {
			console.log('in combined view');
		},

		onShow: function () {
			var canvas = new Byob.CanvasView();
			canvas.render();
			console.log(canvas);
			console.log(Byob.root.canvas);
			console.log(this.canvas);
			// this.canvas.show(canvas);
			console.log(this.ui.canvas);
			var selection = new Byob.SelectionView();
			this.ui.selector.show(selection);
		}
	});
})();