(function() {
	Byob.Views.FooterView = Marionette.View.extend({

		template: JST.footer,

		// // UI bindings create cached attributes that
		// // point to jQuery selected objects
		// ui: {
		// 	filters: '#filters a',
		// 	completed: '.completed a',
		// 	active: '.active a',
		// 	all: '.all a',
		// 	summary: '#todo-count',
		// 	clear: '#clear-completed'
		// },

		// events: {
		// 	'click @ui.clear': 'onClearClick'
		// },

		// collectionEvents: {
		// 	all: 'render'
		// },

		// templateContext: {
		// 	activeCountLabel: function () {
		// 		return (this.activeCount === 1 ? 'item' : 'items') + ' left';
		// 	}
		// },

		// initialize: function () {
		// 	this.filterChannel = Backbone.Radio.channel('filter');
		// 	this.listenTo(this.filterChannel.request('filterState'), 'change:filter', this.updateFilterSelection, this);
		// },

		// serializeData: function () {
		// 	var active = this.collection.getActive().length;
		// 	var total = this.collection.length;

		// 	return {
		// 		activeCount: active,
		// 		totalCount: total,
		// 		completedCount: total - active
		// 	};
		// },

		// onRender: function () {
		// 	this.$el.parent().toggle(this.collection.length > 0);
		// 	this.updateFilterSelection();
		// },

		// updateFilterSelection: function () {
		// 	this.ui.filters.removeClass('selected');
		// 	this.ui[this.filterChannel.request('filterState').get('filter')]
		// 	.addClass('selected');
		// },

		// onClearClick: function () {
		// 	var completed = this.collection.getCompleted();
		// 	completed.forEach(function (todo) {
		// 		todo.destroy();
		// 	});
		// }
	});
})();