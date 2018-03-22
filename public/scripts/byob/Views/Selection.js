(function () {
	'use strict';

	// Selection Base View
	// -------------------
	//
	// Display the sidebar used for part selection
	// 
	Byob.SelectionView = Marionette.LayoutView.extend({
		template: JST.selection,

		initialize: function () {
			console.log('in selection view');
		}

	});
})();