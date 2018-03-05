(function() {
	// Todo Collection
	// ---------------
	Byob.Collections.RobotParts = Backbone.Collection.extend({

		initialize: function initialize() {
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				name: 'Iron Giant Head',
				src: 'models/fuckthisshit.json',
				scale: 0.4,
				posx: 0,
				posy: 6,
				posz: 10
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				name: 'Iron Giant Body',
				src: 'models/IronGiantBody.json',
				scale: 0.4,
				posx: 0,
				posy: 0,
				posz: 10
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'head',
				name: 'Beauty Bot Head',
				src: 'models/topFInal.json',
				scale: 4,
				posx: 0,
				posy: -2,
				posz: 50
			}));
			this.add(new Byob.Models.RobotPart({
				type: 'body',
				name: 'Beauty Bot Body',
				src: 'models/bottomFInal.json',
				scale: 4,
				posx: 0,
				posy: -2,
				posz: 50
			}));
		}
	});
})();