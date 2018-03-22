(function() {
	Byob.ByobController = Marionette.Controller.extend({

		// Start the app by showing the appropriate views
		// and fetching the list of todo items, if there are any
		start: function () {
			this.showHeader(this.todoList);
			this.showFooter(this.todoList);
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

		showSelector: function () {
			var selector = new Byob.CombinedView();
			Byob.root.main.show(selector);
			console.log(Byob.root.canvas);
		},
	});
})();