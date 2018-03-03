(function() {
	Byob.ByobRouter = Marionette.AppRouter.extend({
		appRoutes: {
			'*filter': 'filterItems',
			'': 'showCanvas',
			'home': 'showCanvas'
		}
	});
})();