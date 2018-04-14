(function () {
	'use strict';

	var camera, container, scene, renderer, mesh, mouse, raycaster;
	var objects = [];

	// Robot View
	// -------------------
	//
	Byob.CanvasView = Marionette.LayoutView.extend({

		template: JST.main_canvas,

		ui: {
			partViewer: '.selection-container'
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
				var loader = new THREE.TextureLoader();
				var texture1 = loader.load( "images/BatteredRobot.jpg" );
				// cubeTexture = loader.load

				// cube = new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new 
				// THREE.MeshPhongMaterial({color:0xffffff, map:texture1}));
				// var texture = new THREE.TextureLoader().load( "images/BatteredRobot.jpg" );
				// texture.wrapS = THREE.RepeatWrapping;
				// texture.wrapT = THREE.RepeatWrapping;
				// texture.repeat.set( 100, 100 );
				var material = new THREE.MeshPhongMaterial({shininess: 1, color:0xffffff, map:texture1});
				
				geometry.name = m.name;
				geometry.partType = m.type;
				geometry.children[0].partType = m.type;

				console.log(geometry.children[0].material);
				geometry.children[0].material = material;
				console.log(geometry.children[0].material);

				geometry.scale.set( m.scale, m.scale, m.scale );
				
				geometry.position.set( m.posx, m.posy, m.posz);
				
				console.log(geometry);
				scene.add( geometry );
				renderer.render( scene , camera );
				objects.push(geometry.children[0]);
			}.bind(this));
		},
		
		onDownload: function onDownload(e) {
			var downloadLinks = [];
			console.log(Byob.Robot);
			_.each(Byob.Robot, function(m) {
				console.log(m);
				if (m) {
					console.log('model exists');
					console.log(m.name);
					console.log(m.type);
					if (m.attributes.name === 'Iron Giant' && m.attributes.type === 'head') {
						console.log(m.attributes);
						console.log(m.attributes.downloadLink);
						downloadLinks.push(m.attributes.downloadLink[0]);
						downloadLinks.push(m.attributes.downloadLink[1]);
					} else {
						console.log('add link');
						console.log(m.attributes);
						console.log(m.attributes.downloadLink);
						downloadLinks.push(m.attributes.downloadLink);
					}
				}
			});
			
			console.log(downloadLinks);

			_.each(downloadLinks, function(link) {
				this.createIframeForDownloadHandler(link);
			}.bind(this));

		},

		createIframeForDownloadHandler: function createIframeForDownloadHandler(fileId) {
		    var element = document.createElement("iframe");
		    element.setAttribute('id', 'myframe' + fileId);
		    element.setAttribute('style', 'display:none;');
		    element.setAttribute('src', fileId);
		    document.body.appendChild(element);
		},

		onRender: function onRender() {
			renderer.render( scene, camera );
		}
	});
})();