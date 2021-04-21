//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('transparent');


  //Camera setup    
  const fov = 90;
  const aspect = container.clientWidth * 1.0/ container.clientHeight * 1.0;
  const near = 0.1;
  const far = 11000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, -200);

  
  //Light setup
  const ambient = new THREE.AmbientLight(0xffffff, 3);
  scene.add(ambient);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(-100, 0, 100);
  scene.add(light);
    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  // CUBE
		// Skybox texture website http://www.custommapmakers.org/skyboxes.php
		var geometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
		var cubeMaterials =
		[
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/posx.jpg' ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/negx.jpg' ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/posy.jpg' ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/negy.jpg' ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/posz.jpg' ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/negz.jpg' ), side: THREE.DoubleSide } ) // Back side
		];    
    // Create a MeshFaceMaterial, which allows the cube to have different materials on each face
		var cubeMaterial = new THREE.MeshFaceMaterial( cubeMaterials );
		var cube = new THREE.Mesh( geometry, cubeMaterial );
		scene.add( cube );
    
    
    //Get your video element:
        const video1 = document.getElementById('video1');
        video1.autoplay = true;
    
        const video2 = document.getElementById('video2');
        video2.autoplay = true;
    
        const video3 = document.getElementById('video3');
        video3.autoplay = true;
        
        const video4 = document.getElementById('video4');
        video4.autoplay = true;
    
        const video5 = document.getElementById('video5');
        video5.autoplay = true;

    //Create your video texture:
        const videoTexture1 = new THREE.VideoTexture(video1);
        const videoMaterial1a =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.FrontSide, toneMapped: false} );
        const videoMaterial1b =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.BackSide, toneMapped: false} );
    
        const videoTexture2 = new THREE.VideoTexture(video2);
        const videoMaterial2a =  new THREE.MeshBasicMaterial( {map: videoTexture2, side: THREE.FrontSide, toneMapped: false} );
        const videoMaterial2b =  new THREE.MeshBasicMaterial( {map: videoTexture2, side: THREE.BackSide, toneMapped: false} );
    
        const videoTexture3 = new THREE.VideoTexture(video3);
        const videoMaterial3a =  new THREE.MeshBasicMaterial( {map: videoTexture3, side: THREE.FrontSide, toneMapped: false} );
        const videoMaterial3b =  new THREE.MeshBasicMaterial( {map: videoTexture3, side: THREE.BackSide, toneMapped: false} );
    
        const videoTexture4 = new THREE.VideoTexture(video4);
        const videoMaterial4a =  new THREE.MeshBasicMaterial( {map: videoTexture4, side: THREE.FrontSide, toneMapped: false} );
        const videoMaterial4b =  new THREE.MeshBasicMaterial( {map: videoTexture4, side: THREE.BackSide, toneMapped: false} );
    
        const videoTexture5 = new THREE.VideoTexture(video5);
        const videoMaterial5a =  new THREE.MeshBasicMaterial( {map: videoTexture5, side: THREE.FrontSide, toneMapped: false} );
        const videoMaterial5b =  new THREE.MeshBasicMaterial( {map: videoTexture5, side: THREE.BackSide, toneMapped: false} );
    //Create screen
        const screen1 = new THREE.PlaneGeometry(100, 100, 0);
        const screen2 = new THREE.PlaneGeometry(100, 100, 0);
        const videoScreen1 = new THREE.Mesh(screen1, videoMaterial1a,);
        const videoScreen2 = new THREE.Mesh(screen2, videoMaterial1b,);
        scene.add(videoScreen1);
        videoScreen1.position.y = -100; 
        scene.add(videoScreen2);
        videoScreen2.position.y = -100;
    
        const screen3 = new THREE.PlaneGeometry(100, 100, 0);
        const screen4 = new THREE.PlaneGeometry(100, 100, 0);
        const videoScreen3 = new THREE.Mesh(screen3, videoMaterial2a,);
        const videoScreen4 = new THREE.Mesh(screen4, videoMaterial2b,);
        scene.add(videoScreen3);
        videoScreen3.position.x = -100;
        scene.add(videoScreen4);
        videoScreen4.position.x = -100;
    
        const screen5 = new THREE.PlaneGeometry(100, 100, 0);
        const screen6 = new THREE.PlaneGeometry(100, 100, 0);
        const videoScreen5 = new THREE.Mesh(screen5, videoMaterial3a,);
        const videoScreen6 = new THREE.Mesh(screen6, videoMaterial3b,);
        scene.add(videoScreen5);
        videoScreen5.position.x = 100;
        scene.add(videoScreen6);
        videoScreen6.position.x = 100;
    
        const screen7 = new THREE.PlaneGeometry(100, 100, 0);
        const screen8 = new THREE.PlaneGeometry(100, 100, 0);
        const videoScreen7 = new THREE.Mesh(screen7, videoMaterial4a,);
        const videoScreen8 = new THREE.Mesh(screen8, videoMaterial4b,);
        scene.add(videoScreen7);
        videoScreen7.position.y = 100;
        scene.add(videoScreen8);
        videoScreen8.position.y = 100;
    
        const screen9 = new THREE.PlaneGeometry(100, 100, 0);
        const screen10 = new THREE.PlaneGeometry(100, 100, 0);
        const videoScreen9 = new THREE.Mesh(screen9, videoMaterial5a,);
        const videoScreen10 = new THREE.Mesh(screen10, videoMaterial5b,);
//        scene.add(videoScreen9);
//        videoScreen9.position.y = -110;
//        scene.add(videoScreen10);
//        videoScreen10.position.y = -110;
    
        
    
  //Load Models
  let loader = new THREE.GLTFLoader();
    
  loader.load("obj/tahoe.gltf", function(gltf) {
//    scene.add(gltf.scene);
    tahoe = gltf.scene;
    animate();
  });
    
  loader.load("obj/deathvalley.gltf", function(gltf) {
//    scene.add(gltf.scene);
    deathvalley = gltf.scene;
    animate();
  });
   
}


function animate() {
    
//  grid.position.y = -10;
//  
//  face.rotation.y += .005;
//  absform.rotation.z += .05;
//  absform.rotation.y += .05;
//  absform.rotation.x += .05;
//  absform.scale.x += .0;
//  tahoe.position.x += -40;
//  deathvalley.position.x += 40;
    
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
    
}



init();

function onWindowResize() {
  camera.aspect = container.clientWidth * 1.0/ container.clientHeight * 1.0;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
}

window.addEventListener("resize", onWindowResize);

//Orbit Controls
  controls = new THREE.OrbitControls( camera, renderer.domElement);
  controls.maxZoom = 8000;

