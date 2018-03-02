(function() {
	// Item List View
	// --------------
	//
	// Manages List View
	Byob.Views.ListView = Marionette.View.extend({

		template: JST.todo_list,

		regions: {
			listBody: {
				el: 'ul',
				replaceElement: true
			}
		},

		ui: {
			toggle: '#toggle-all'
		},

		events: {
			'click @ui.toggle': 'onToggleAllClick'
		},

		collectionEvents: {
			'change:completed': 'render',
			all: 'setCheckAllState'
		},

		initialize: function () {
			var filterChannel = Backbone.Radio.channel('filter');
			this.listenTo(filterChannel.request('filterState'), 'change:filter', this.render, this);
		},

		setCheckAllState: function () {
			function reduceCompleted(left, right) {
				return left && right.get('completed');
			}

			var allCompleted = this.collection.reduce(reduceCompleted, true);
			this.ui.toggle.prop('checked', allCompleted);
			this.$el.parent().toggle(!!this.collection.length);
		},

		onToggleAllClick: function (e) {
			var isChecked = e.currentTarget.checked;

			this.collection.each(function (todo) {
				todo.save({ completed: isChecked });
			});
		},

		onRender: function () {
			this.showChildView('listBody', new Byob.ListBodyView({
				collection: this.collection
			}));
		}
	});
})();