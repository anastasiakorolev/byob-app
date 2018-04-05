(function () {
	'use strict';

	var camera, container, controls, scene, projector, renderer;
	var mesh, mixer;
	var mouse, raycaster;
	var selectedModel = 2;
	var selectedHeadModel = 6;
	var objects = [];
	var modelArray = ["","","obj/IronGiantBody.obj", "obj/BeautyBotBody.json", "obj/IronGiantBody.obj", "obj/BeautyBotBody.json","IG Head","obj/BeautyBotHead.json","IG Head","obj/BeautyBotHead.json"];

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
			//
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
				// _.each(scene.children, function(m) {
				// 	if (m.name === intersects[ 0 ].object.name && m.partType === intersects[ 0 ].object.partType) {
				// 		m.material.color.setHex( Math.random() * 0xffffff );
				// 	}
				// });
				// renderer.render( scene , camera );
				console.log(scene.partType);
				Byob.root.selector.show(new Byob.PartViewerView({
					partType: scene.partType,
					color: rand
				}));
			}
		},

		calculatePointsOnCircle: function calculatePointsOnCircle(numPoints, r) {
			var pointArray = [];
			for(var i = 0; i < numPoints; i++) {
				var x = r * Math.cos((i* (2*Math.PI))/numPoints);
				var y = r * Math.sin((i* (2*Math.PI))/numPoints);
				pointArray.push([x,y]);
			}
			return pointArray;
		},
		
		loadRobot: function loadRobot() {
			var numHeads = 0, numBodies = 0, numLegs = 0, numArms = 0;
			_.each(this.collection.models, function(m) {
				switch (m.type) {
					case 'head': 
						numHeads++;
						break;
					case 'body': 
						numBodies++;
						break;
					case 'leg': 
						numLegs++;
						break;
					case 'arm': 
						numArms++;
						break;
				}
			});

			var headPositionsArray = this.calculatePointsOnCircle(numHeads, 20);
			var bodyPositionsArray = this.calculatePointsOnCircle(numBodies, 20);

			var heads = _.filter(this.collection.models, function(m) {
				return m.type ==='head';
			});

			var bodies = _.filter(this.collection.models, function(m) {
				return m.type ==='body';
			});
			console.log(Byob.Robot);
			this.loadPart(Byob.Robot.head, headPositionsArray);
			this.loadPart(Byob.Robot.body, bodyPositionsArray);
			
		},

		loadPart: function loadPart(part, array) {
			var m = part;

			this.loader.load(m.src, function( geometry, materials ) {
				var blin = materials[0];
				var normalTexture = new THREE.MeshNormalMaterial();
				
				var materialArray = [blin, normalTexture];
				
				mesh = new THREE.Mesh( geometry, materialArray[0] );
				mesh.name = m.name;
				mesh.partType = m.type;
				
				mesh.scale.set( m.scale, m.scale, m.scale );
				
				mesh.position.set( m.posx, m.posy, m.posz);
				
				scene.add( mesh );
				renderer.render( scene , camera );
				objects.push(mesh);
			}.bind(this));
		},
		
		onWindowResize: function onWindowResize() {
			// camera.aspect = window.innerHeight / window.innerWidth ;
			// camera.updateProjectionMatrix();
			// renderer.setSize( window.innerHeight, window.innerWidth );
			// renderer.render(scene,camera);
		},

		onBodyUpdate: function onBodyUpdate(value) {
			var direction = value.target.attributes[3].value;
			
			if (direction === 'next') {
		    	    if((selectedModel + 1) <= 5){
		    	        selectedModel += 1;
		    	    } else {
		    	        selectedModel = 2;
		    	    }
		    	} else  {
		    	    if((selectedModel - 1) >= 2){
		    	        selectedModel -= 1;
		    	    } else {
		    	        selectedModel = 5;
		    	    }
		    	}
		    	
		    	if (selectedModel === 2) {
		    		console.log('in here 2');
		    		console.log(scene.children);
		    		scene.getObjectByName('ig1').position.set(0, -2, 10);
		    		scene.getObjectByName('beauty bot 1').position.set( -20, -5, 30);
		    		scene.getObjectByName('ig2').position.set(0, -2, 50);
		    		scene.getObjectByName('beauty bot 2').position.set(  20, -5, 30);
		    		renderer.render(scene,camera);
		    	} else if (selectedModel === 3) {
		    		console.log('in here 3');
		    		console.log(scene.children);
		    		scene.getObjectByName('beauty bot 1').position.set(0, -5, 10);
		    		scene.getObjectByName('ig2').position.set( -20, -2, 30);
		    		scene.getObjectByName('beauty bot 2').position.set(0, -5, 50);
		    		scene.getObjectByName('ig1').position.set(  20, -2, 30);
			    	renderer.render(scene,camera);
		    	} else if (selectedModel === 4) {
		    		console.log('in here 4');
		    		console.log(scene.children);
		    		scene.getObjectByName('ig2').position.set(0, -2, 10);
		    		scene.getObjectByName('beauty bot 2').position.set( -20, -5, 30);
		    		scene.getObjectByName('ig1').position.set(0, -2, 50);
		    		scene.getObjectByName('beauty bot 1').position.set(  20, -5, 30);
		    		renderer.render(scene,camera);
		    	} else if (selectedModel === 5) {
		    		console.log('in here 5');
		    		console.log(scene.children);
		    		scene.getObjectByName('beauty bot 2').position.set(0, -5, 10);
		    		scene.getObjectByName('ig1').position.set( -20, -2, 30);
		    		scene.getObjectByName('beauty bot 1').position.set(0, -5, 50);
		    		scene.getObjectByName('ig2').position.set(  20, -2, 30);
		    		renderer.render(scene,camera);
		    	}
		},
		
		onHeadUpdate: function onHeadUpdate(value) {
			console.log(value);
			var direction = value.target.attributes[3].value;
			
			if (direction === 'next') {
		    	    if((selectedHeadModel + 1) <= 9){
		    	        selectedHeadModel += 1;
		    	    } else {
		    	        selectedHeadModel = 6;
		    	    }
		    	} else  {
		    	    if((selectedHeadModel - 1) >= 6){
		    	        selectedHeadModel -= 1;
		    	    } else {
		    	        selectedHeadModel = 9;
		    	    }
		    	}
		    	
		    	if (selectedHeadModel === 6) {
		    		scene.getObjectByName('ig head 1').position.set(0, 5, 10);
		    		scene.getObjectByName('beauty bot top 1').position.set( -20, 0, 30);
		    		scene.getObjectByName('ig head 2').position.set(0, 5, 50);
		    		scene.getObjectByName('beauty bot top 2').position.set( 20, 0, 30);
		    		console.log('in here 6');
		    		console.log(scene.children);
		    		renderer.render(scene,camera);
		    	} else if (selectedHeadModel === 7) {
		    		scene.getObjectByName('beauty bot top 1').position.set(0, 0, 10);
		    		scene.getObjectByName('ig head 2').position.set( -20, 5, 30);
		    		scene.getObjectByName('beauty bot top 2').position.set(0, 0, 50);
		    		scene.getObjectByName('ig head 1').position.set(  20, 5, 30);
		    		console.log('in here 7');
		    		console.log(scene.children);
			    	renderer.render(scene,camera);
		    	} else if (selectedHeadModel === 8) {
		    		scene.getObjectByName('ig head 2').position.set(0, 5, 10);
		    		scene.getObjectByName('beauty bot top 2').position.set( -20, 0, 30);
		    		scene.getObjectByName('ig head 1').position.set(0, 5, 50);
		    		scene.getObjectByName('beauty bot top 1').position.set( 20, 0, 30);
		    		console.log('in here 8');
		    		console.log(scene.children);
		    		renderer.render(scene,camera);
		    	} else if (selectedHeadModel === 9) {
		    		scene.getObjectByName('beauty bot top 2').position.set(0, 0, 10);
		    		scene.getObjectByName('ig head 1').position.set( -20, 5, 30);
		    		scene.getObjectByName('beauty bot top 1').position.set(0, 0, 50);
		    		scene.getObjectByName('ig head 2').position.set(  20, 5, 30);
		    		console.log('in here 9');
		    		console.log(scene.children);
		    		renderer.render(scene,camera);
		    	}
		},
		
		onDownload: function onDownload() {
			var downloadLinks = [];
			if(selectedHeadModel === 6 || selectedHeadModel === 8) {
				downloadLinks.push('obj/IronGiantJaw.obj');
				downloadLinks.push('obj/IronGiantHead.obj');
			} else {
				downloadLinks.push(modelArray[selectedHeadModel]);
			}
			downloadLinks.push(modelArray[selectedModel]);
			
			console.log(downloadLinks);
			
			var tempDownloadLink = document.createElement("a");
			tempDownloadLink.style.display = 'none';
			document.body.appendChild(tempDownloadLink);
			
			for(var n = 0; n < downloadLinks.length; n++) {
				var d = downloadLinks[n];
				tempDownloadLink.setAttribute('href', d);
				tempDownloadLink.setAttribute('download', d);
				tempDownloadLink.click();
			}
			
		},

		onRender: function onRender() {
			controls.update();
			renderer.render( scene, camera );
		}
	});
})();