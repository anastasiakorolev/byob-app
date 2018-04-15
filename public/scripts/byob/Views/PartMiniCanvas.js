(function () {
	'use strict';

	var camera, container, controls, scene, projector, renderer;
	var mesh, mixer;
	var mouse, raycaster;
	var selectedModel = 0;
	var numParts = 0;
	var parts = [];

	// Robot View
	// -------------------
	//
	// Display an individual todo item, and respond to changes
	// that are made to the item, including marking completed.
	Byob.PartMiniCanvasView = Marionette.LayoutView.extend({
		template: JST.part_viewer,

		initialize: function initialize (params) {
			this.collection = new Byob.Collections.RobotParts();
			console.log('inside canvas view');
			renderer = new THREE.WebGLRenderer({alpha: true});
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setClearColor( 0x000000, 0 );
			//renderer.setSize( window.innerWidth, window.innerHeight );

			var oldCanvas = document.getElementById("mini-canvas");
			if (oldCanvas) {
				oldCanvas.parentNode.removeChild(oldCanvas);
			}

			var c = renderer.domElement;
			c.id = 'mini-canvas';
			console.log(c);

			document.getElementById("mini-canvas-container").appendChild(c);
			
			camera = new THREE.PerspectiveCamera( 50, document.getElementById('selector').style.width / document.getElementById('selector').style.height, 0.1, 10000 );
			camera.position.z = 60;
			camera.position.y = 2;
			camera.target = new THREE.Vector3( 0, -1, -1 );
			
			controls = new THREE.TrackballControls( camera, renderer.domElement );
			controls.noPan = true;
			controls.minDistance = 50;
			controls.maxDistance = 140;

			controls.update();
			
			scene = new THREE.Scene();
			var light = new THREE.DirectionalLight( 0xefefff, 1.5 );
			light.position.set( 1, 1, 1 ).normalize();
			scene.add( light );
			var light2 = new THREE.DirectionalLight( 0xffefef, 1.5 );
			light2.position.set( -1, -1, -1 ).normalize();
			scene.add( light2 );
			this.loader = new THREE.ObjectLoader();

			this.partType = scene.partType;
			console.log(params);
			if (params) {
				this.partType = params.partType;
				this.color = params.color;
			}
			console.log(this.partType);

			this.loadPart(this.partType);
			renderer.render( scene, camera );

			window.addEventListener( 'resize', this.onWindowResize(), false );

			this.animate();
		},

		onPartUpdate: function onPartUpdate(value, type) {
			numParts = 0;
			parts = [];
			this.collection = new Byob.Collections.RobotParts();
			_.each(this.collection.models, function(m) {
				if (m.type === type) {
					numParts++;
					parts.push(m);
				}
			}.bind(this));

			console.log(value);
			var direction = value.target.attributes[3].value;
			console.log(numParts);
			console.log(selectedModel);
			console.log(parts);
			if (direction === 'next') {
				if((selectedModel + 1) < numParts){
					selectedModel += 1;
				} else {
					selectedModel = 0;
				}
			} else if (direction === 'previous')  {
				if((selectedModel - 1) >= 0){
					selectedModel -= 1;
				} else {
					selectedModel = numParts - 1;
				}
			}
			this.loadPart(type);
			this.animate();
		},

		loadPart: function loadPart(type) {
			console.log(scene);
			console.log(scene.children);
			numParts = 0;
			parts = [];
			this.collection = new Byob.Collections.RobotParts();
			console.log(this.collection);
			_.each(this.collection.models, function(m) {
				console.log(m);
				console.log(m.type);
				console.log(type);
				if (m.type === type) {
					numParts++;
					parts.push(m);
				}
			}.bind(this));

			this.part = parts[selectedModel];
			
			console.log(parts);
			console.log(selectedModel);
			console.log(parts[selectedModel]);
			console.log(this.part);

			this.loader.load(this.part.attributes.srcCentered, function( geometry ) {
				
				geometry.name = this.part.name;
				geometry.partType = this.part.type;
				
				geometry.scale.set( this.part.scale*1.5, this.part.scale*1.5, this.part.scale*1.5 );
				
				geometry.position.set( 0, 0, 0 );

				if (this.color) {
					geometry.children[0].material.color.setHex( this.color );
				}
				
				console.log(scene);
				console.log(scene.children.length);
				if (scene.children.length === 3) {
					scene.children[2] = geometry;
					scene.partType = geometry.partType;
				} else {
					scene.add( geometry );
				}
			}.bind(this));
			controls.update();
			renderer.render( scene, camera );
		},

		updateDefaultRobot: function updateDefaultRobot() {
			console.log(Byob.Robot[this.partType]);
			Byob.Robot[this.partType] = this.part;
			console.log(Byob.Robot[this.partType]);
			var controller = new Byob.ByobController();
			controller.showSelector();
		},

		animate: function animate() {
			requestAnimationFrame( animate );
			controls.update();
			renderer.render( scene, camera );
		},
		
		onWindowResize: function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.render(scene,camera);
		},

		onRender: function onRender() {
			controls.update();
			renderer.render( scene, camera );
		}
	});
})();