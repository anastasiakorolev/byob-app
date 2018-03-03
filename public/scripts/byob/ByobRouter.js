(function() {
	Byob.ByobRouter = Marionette.AppRouter.extend({
		appRoutes: {
			'': 'showCanvas',
			'home': 'showCanvas'
		}
	});
})();