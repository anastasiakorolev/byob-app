(function() {
	// Todo Model
	// ----------
	Byob.Models.RobotPart = Backbone.Model.extend({
		initialize: function (params) {
			this.type = params.type;
			this.name = params.name;
			this.src = params.src;
			this.scale = params.scale;
			this.posx = params.posx;
			this.posy = params.posy;
			this.posz = params.posz;
		},

		loadPart: function loadPart(loader, scene, renderer, camera) {
			var mesh;
			loader.load(this.src, function( geometry, materials ) {
				var blin = materials[0];
				var normalTexture = new THREE.MeshNormalMaterial();
				
				var materialArray = [blin, normalTexture];
				
				mesh = new THREE.Mesh( geometry, materialArray[0] );
				mesh.name = this.name;
				
				mesh.scale.set( this.scale, this.scale, this.scale );
				
				mesh.position.set( this.posx, this.posy, this.posz);
				mesh.rotation.x = THREE.Math.degToRad(180);
				console.log(mesh);
				scene.add( mesh );
				renderer.render( scene , camera );
			}.bind(this));
		}
	});
})();