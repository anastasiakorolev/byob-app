(function() {
	Byob.Views.RootView = Marionette.LayoutView.extend({

		template: JST.root,

		regions: {
			header: '#header',
			main: '#main',
			footer: '#footer',
			canvas: '#canvas-area'
		},

		initialize: function initialize () {
			var headerView = new Byob.Views.HeaderView();
			var footerView = new Byob.Views.FooterView();

			this.header.show(headerView);
			// this.main.show(mainView);
			this.footer.show(footerView);
		}
	});
})();