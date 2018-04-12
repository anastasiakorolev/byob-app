(function () {
	'use strict';

	var camera, container, controls, scene, projector, renderer;
	var mesh, mixer;
	var mouse, raycaster;
	var objects = [];
	
	// Robot View
	// -------------------
	//
	// Display an individual todo item, and respond to changes
	// that are made to the item, including marking completed.
	Byob.CanvasView = Marionette.LayoutView.extend({

		template: JST.main_canvas,

		ui: {
			partViewer: '.selection-container'
		},

		events: {
			'click .arrowBody': 'onBodyUpdate',
			'click .arrowHead': 'onHeadUpdate',
			'click .downloadFiles': 'onDownload'
		},

		initialize: function initialize () {
			this.collection = new Byob.Collections.RobotParts();
			console.log('inside canvas view');
			renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth/2, window.innerHeight );
			
			camera = new THREE.PerspectiveCamera( 50, (window.innerWidth/2) / (window.innerHeight), 0.1, 10000 );
			camera.position.z = 60;
			camera.position.y = 2;
			camera.target = new THREE.Vector3( 0, -1, -1 );
			
			controls = new THREE.TrackballControls( camera, renderer.domElement );
			controls.rotateSpeed = 1.0;
			controls.zoomSpeed = 1.2;
			controls.panSpeed = 0.8;
			controls.noZoom = false;
			controls.noPan = false;
			controls.staticMoving = true;
			controls.dynamicDampingFactor = 0.3;
			controls.update();
			
			scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xf5f5f5 );
			
			var light = new THREE.DirectionalLight( 0xefefff, 1.5 );
			light.position.set( 1, 1, 1 ).normalize();
			scene.add( light );
			var light2 = new THREE.DirectionalLight( 0xffefef, 1.5 );
			light2.position.set( -1, -1, -1 ).normalize();
			scene.add( light2 );
			this.loader = new THREE.JSONLoader();
			
			this.loadRobot();
			
			var c = renderer.domElement;

			raycaster = new THREE.Raycaster();
			mouse = new THREE.Vector2();

			this.onRender();

			document.getElementById("canvas").appendChild(c);	
			// window.addEventListener( 'resize', this.onWindowResize(), false );
		},

		onCanvasMouseDown: function onCanvasMouseDown(e){
			mouse.x = - ((renderer.domElement.clientWidth/2) - e.clientX)/renderer.domElement.clientWidth *2;//( e.clientX / renderer.domElement.clientWidth ) * 2;
			mouse.y = ((renderer.domElement.clientHeight/2) - e.clientY)/renderer.domElement.clientHeight *2 +0.25;//( (e.clientY - 80) / renderer.domElement.clientHeight ) * 2;
			
			raycaster.setFromCamera( mouse, camera );
			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {
				var rand = Math.random() * 0xffffff;
				intersects[ 0 ].object.material.color.setHex( rand );
				scene.partType = intersects[ 0 ].object.partType;
				renderer.render( scene , camera );
				console.log(scene.partType);
				Byob.root.selector.show(new Byob.PartViewerView({
					partType: scene.partType,
					color: rand
				}));
			}
		},
		
		loadRobot: function loadRobot() {
			console.log(Byob.Robot);
			this.loadPart(Byob.Robot.head);
			this.loadPart(Byob.Robot.body);
			this.loadPart(Byob.Robot.lArm);
			this.loadPart(Byob.Robot.rArm);
			this.loadPart(Byob.Robot.lLeg);
			this.loadPart(Byob.Robot.rLeg);
			console.log(scene);
		},

		loadPart: function loadPart(part) {
			var m = part;
			console.log('loading part');
			var objLoader = new THREE.ObjectLoader();
			objLoader.load(m.src, function( geometry ) {
				var texture = new THREE.TextureLoader().load( "images/BatteredRobot.jpg" );
				texture.wrapS = THREE.RepeatWrapping;
				texture.wrapT = THREE.RepeatWrapping;
				texture.repeat.set( 100, 100 );
				var material = new THREE.MeshPhongMaterial({shininess: 1});
				
				geometry.name = m.name;
				geometry.partType = m.type;

				console.log(geometry.children[0].material);
				geometry.children[0].material = material;
				console.log(geometry.children[0].material);

				geometry.scale.set( m.scale, m.scale, m.scale );
				
				geometry.position.set( m.posx, m.posy, m.posz);
				
				console.log(geometry);
				scene.add( geometry );
				renderer.render( scene , camera );
				objects.push(geometry);
			}.bind(this));
			// } else {
			// 	this.loader.load(m.src, function( geometry, materials ) {
			// 		var blin = materials[0];
			// 		var normalTexture = new THREE.MeshNormalMaterial();
					
			// 		var materialArray = [blin, normalTexture];
					
			// 		mesh = new THREE.Mesh( geometry, materialArray[0] );
			// 		mesh.name = m.name;
			// 		mesh.partType = m.type;
					
			// 		mesh.scale.set( m.scale, m.scale, m.scale );
					
			// 		mesh.position.set( m.posx, m.posy, m.posz);
					
			// 		scene.add( mesh );
			// 		renderer.render( scene , camera );
			// 		objects.push(mesh);
			// 	}.bind(this));
			// }

		},
		
		// onDownload: function onDownload() {
		// 	var downloadLinks = [];
		// 	if(selectedHeadModel === 6 || selectedHeadModel === 8) {
		// 		downloadLinks.push('obj/IronGiantJaw.obj');
		// 		downloadLinks.push('obj/IronGiantHead.obj');
		// 	} else {
		// 		downloadLinks.push(modelArray[selectedHeadModel]);
		// 	}
		// 	downloadLinks.push(modelArray[selectedModel]);
			
		// 	console.log(downloadLinks);
			
		// 	var tempDownloadLink = document.createElement("a");
		// 	tempDownloadLink.style.display = 'none';
		// 	document.body.appendChild(tempDownloadLink);
			
		// 	for(var n = 0; n < downloadLinks.length; n++) {
		// 		var d = downloadLinks[n];
		// 		tempDownloadLink.setAttribute('href', d);
		// 		tempDownloadLink.setAttribute('download', d);
		// 		tempDownloadLink.click();
		// 	}
			
		// },

		onRender: function onRender() {
			controls.update();
			renderer.render( scene, camera );
		}
	});
})();