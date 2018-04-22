(function () {
	'use strict';

	var camera, controls, container, scene, renderer, mesh, mouse, raycaster;
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

			var c = renderer.domElement;
			raycaster = new THREE.Raycaster();
			mouse = new THREE.Vector2();

			document.getElementById("canvas").appendChild(c);
			
			camera = new THREE.PerspectiveCamera( 50, (window.innerWidth/2) / (window.innerHeight), 0.1, 10000 );
			camera.position.z = 60;
			camera.position.y = 2;
			camera.target = new THREE.Vector3( 0, -1, -1 );

			controls = new THREE.TrackballControls( camera, renderer.domElement );
			controls.noPan = true;
			controls.minDistance = 50;
			controls.maxDistance = 140;

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
			
			this.animate();
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
				scene.partName = intersects[ 0 ].object.partName;
				renderer.render( scene , camera );
				console.log(scene.partType);

				Byob.root.selector.show(new Byob.PartViewerView({
					partType: scene.partType,
					color: rand,
					partName: scene.partName
				}));
			}
		},
		
		loadRobot: function loadRobot() {
			console.log(Byob.Robot);

			if (Byob.Robot.body.attributes.name === 'Plankton Bot') {
				this.loadPart(Byob.Robot.body);
			} else { 
				this.loadPart(Byob.Robot.head);
				this.loadPart(Byob.Robot.body);
			}

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
			var src = m.src;
			console.log(Byob.Robot.body.attributes.name);
			if (Byob.Robot.body.attributes.name !== 'Iron Giant') {
				console.log(m.type);
				console.log(m.name);
				if ((m.type === 'lArm' || m.type === 'rArm') && m.name === 'Iron Giant') {
					console.log(src);
					console.log(m);
					src = m.attributes.srcRot;
					console.log(m.srcRot);
					console.log(src);
				}
			}

			objLoader.load(src, function( geometry ) {
				var loader = new THREE.TextureLoader();
				var texture1 = loader.load( "images/BatteredRobot.jpg" );
				// cubeTexture = loader.load

				// cube = new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new 
				// THREE.MeshPhongMaterial({color:0xffffff, map:texture1}));
				// var texture = new THREE.TextureLoader().load( "images/BatteredRobot.jpg" );
				// texture.wrapS = THREE.RepeatWrapping;
				// texture.wrapT = THREE.RepeatWrapping;
				// texture.repeat.set( 100, 100 );
				var material = new THREE.MeshPhongMaterial({shininess: 1, color:Math.random() * 0xffffff, side: THREE.DoubleSide});
				
				geometry.name = m.name;
				geometry.partType = m.type;
				geometry.partName = m.attributes.typeName;
				geometry.children[0].partType = m.type;
				geometry.children[0].partName = m.attributes.typeName;

				console.log(geometry.children[0].material);
				geometry.children[0].material = material;
				console.log(geometry.children[0].material);

				geometry.scale.set( 0.5, 0.5, 0.5 );
				
				if (m.type !== 'body'){
					geometry.position.set( Byob.Robot.body.attributes[m.type][0], Byob.Robot.body.attributes[m.type][1], Byob.Robot.body.attributes[m.type][2]);
				} else {
					geometry.position.set( m.posx, m.posy, m.posz );
				}
			
				console.log(geometry);
				scene.add( geometry );
				renderer.render( scene , camera );
				objects.push(geometry.children[0]);
			}.bind(this));
			controls.update();
		},
		
		onDownload: function onDownload(e) {
			var downloadLinks = {};
			console.log(Byob.Robot);
			var zip = new JSZip();
			_.each(Byob.Robot, function(m) {
				console.log(m);
				if (m) {
					console.log('model exists');
					console.log(m.name);
					console.log(m.type);
					console.log(zip);
					if (m.attributes.name === 'Iron Giant' && m.attributes.type === 'head') {
						console.log(m.attributes);
						console.log(m.attributes.downloadLink);
						downloadLinks.push(m.attributes.downloadLink[0], m.name);
						// zip.files.push(m.attributes.downloadLink[0], m.name);
						downloadLinks.push(m.attributes.downloadLink[1], m.name);
						// zip.files.push(m.attributes.downloadLink[1], m.name);
					} else {
						console.log('add link');
						console.log(m.attributes);
						console.log(m.attributes.downloadLink);
						downloadLinks.push(m.attributes.downloadLink, m.name);
						// zip.files.push(m.attributes.downloadLink, m.name);
					}
				}
			});
			
			zip.files = downloadLinks;
			console.log(downloadLinks);
			content = zip.generate();
			location.href="data:application/zip;base64," + content;

			// _.each(downloadLinks, function(link) {
			// 	this.createIframeForDownloadHandler(link);
			// }.bind(this));

		},

		createIframeForDownloadHandler: function createIframeForDownloadHandler(fileId) {
		    var element = document.createElement("iframe");
		    element.setAttribute('id', 'myframe' + fileId);
		    element.setAttribute('style', 'display:none;');
		    element.setAttribute('src', fileId);
		    document.body.appendChild(element);
		},

		animate: function animate() {
			requestAnimationFrame( animate );
			controls.update();
			renderer.render( scene, camera );
		},

		onRender: function onRender() {
			controls.update();
			renderer.render( scene, camera );
		}
	});
})();