(function() {
	// Todo Collection
	// ---------------
	Byob.Collections.TodoCollection = Backbone.Collection.extend({
		model: Byob.Models.Todo,

		localStorage: new Backbone.LocalStorage('todos-backbone-marionette'),

		comparator: 'created',

		getCompleted: function () {
			return this.filter(this._isCompleted);
		},

		getActive: function () {
			return this.reject(this._isCompleted);
		},

		_isCompleted: function (todo) {
			return todo.isCompleted();
		}
	});
})();