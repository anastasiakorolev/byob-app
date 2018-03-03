(function() {
	Byob.ByobController = Marionette.Controller.extend({

		initialize: function () {
			this.filterChannel = Backbone.Radio.channel('filter');
			this.todoList = new Byob.Collections.TodoCollection();
		},

		// Start the app by showing the appropriate views
		// and fetching the list of todo items, if there are any
		start: function () {
			this.showHeader(this.todoList);
			this.showFooter(this.todoList);
			this.todoList.on('all', this.updateHiddenElements, this);
			this.todoList.fetch();
		},

		updateHiddenElements: function () {
			$('#main, #footer').toggle(!!this.todoList.length);
		},

		showHeader: function (todoList) {
			var header = new Byob.Views.HeaderView({
				collection: todoList
			});
			console.log(Byob.root.header);
			Byob.root.header.show(header);
		},

		showFooter: function (todoList) {
			var footer = new Byob.Views.FooterView({
				collection: todoList
			});
			console.log(Byob.root.footer);
			Byob.root.footer.show(footer);
		},

		showTodoList: function (todoList) {
			Byob.root.showChildView('main', new Byob.Views.ListView({
				collection: todoList
			}));
		},

		showCanvas: function () {
			var canvas = new Byob.CanvasView();
			console.log(canvas);
			console.log(Byob.root.canvas);
			Byob.root.canvas.show(canvas);
			console.log(Byob.root.canvas);
		},


		// Set the filter to show complete or all items
		filterItems: function (filter) {
			var newFilter = filter && filter.trim() || 'all';
			this.filterChannel.request('filterState').set('filter', newFilter);
		}
	});
})();