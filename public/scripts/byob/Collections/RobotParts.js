(function() {
	// Todo Collection
	// ---------------
	Byob.Collections.RobotParts = Backbone.Collection.extend({

		initialize: function initialize() {
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				name: 'Iron Giant',
				src: 'models/fuckthisshit.json',
				scale: 1,
				posx: 0,
				posy: 15,
				posz: 0
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				name: 'Iron Giant',
				src: 'models/IronGiantBody.json',
				scale: 1,
				posx: 0,
				posy: 0,
				posz: 0
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				name: 'Beauty Bot',
				src: 'models/topFInal.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				name: 'Beauty Bot',
				src: 'models/bottomFInal.json',
				scale: 6,
				posx: 0,
				posy: 0,
				posz: 0
			}));
		},

		filterCollection: function (type) {
			return _.filter(this, function(m) {
				return m.type == type;
			});
		}
	});
})();