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
			console.log('root view');
			

			
		},

		onRender: function onRender () {
			console.log('START: rendering root view');
			var headerView = new Byob.Views.HeaderView();
			var footerView = new Byob.Views.FooterView();
			this.header.show(headerView);
			this.footer.show(footerView);
			console.log('DONE: rendering root view');
		}
	});
})();