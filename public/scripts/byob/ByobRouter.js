(function() {
	Byob.ByobRouter = Marionette.AppRouter.extend({
		appRoutes: {
			'': 'showSelector',
			'home': 'showSelector'
		}
	});
})();