(function() {
	// Item List View Body
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of items for display.
	Byob.Views.ListBodyView = Marionette.CollectionView.extend({
		tagName: 'ul',

		id: 'todo-list',

		childView: Byob.TodoView,

		filter: function (child) {
			var filterChannel = Backbone.Radio.channel('filter');
			var filteredOn = filterChannel.request('filterState').get('filter');
			return child.matchesFilter(filteredOn);
		}
	});
})();