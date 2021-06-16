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
    scene.background = new THREE.Color('#ffffff00');


    //Camera setup    
    const fov = 90;
    const aspect = container.clientWidth * 1.0/ container.clientHeight * 1.0;
    const near = 0.1;
    const far = 3000;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, -400);


    //Light setup
    const ambient = new THREE.AmbientLight(0xffffff, .3);
    scene.add(ambient);

    const light = new THREE.PointLight(0xffffff,.7);
    light.position.set(100, 0, 100);
    scene.add(light);

    const light2 = new THREE.PointLight(0xffffff,1);
    light.position.set(300, -100, -500);
    scene.add(light);
    
    const light3 = new THREE.PointLight(0x00cc41,3);
    light3.position.set(600, -500, -1000);
    scene.add(light); 

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //  // CUBE
    //		// Skybox texture website http://www.custommapmakers.org/skyboxes.php
    //		var geometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
    //		var cubeMaterials =
    //		[
    //			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/posx.jpg' ), side: THREE.DoubleSide } ), // Right side
    //			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/negx.jpg' ), side: THREE.DoubleSide } ), // Left side
    //			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/posy.jpg' ), side: THREE.DoubleSide } ), // Top side
    //			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/negy.jpg' ), side: THREE.DoubleSide } ), // Bottom side
    //			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/negz.jpg' ), side: THREE.DoubleSide } ), // Front side
    //			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/posz.jpg' ), side: THREE.DoubleSide } ) // Back side
    //		];    
    //    // Create a MeshFaceMaterial, which allows the cube to have different materials on each face
    //		var cubeMaterial = new THREE.MeshFaceMaterial( cubeMaterials );
    //		var cube = new THREE.Mesh( geometry, cubeMaterial );
    //    cube.rotation.x += .05;
    //		scene.add( cube );
    //        
    //        

    //    
    //    //Get your video element:
    //        const video1 = document.getElementById('video1');
    //        video1.autoplay = true;
    //    
    //
    //    //Create your video texture:
    //        const videoTexture1 = new THREE.VideoTexture(video1);
    //        const videoMaterial1a =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.BackSide, toneMapped: false} );
    //        const videoMaterial1b =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.FrontSide, toneMapped: false} );
    //    
    //       
    //    //Create screen
    //        const screen1 = new THREE.PlaneGeometry(100, 100, 0);
    //        const screen2 = new THREE.PlaneGeometry(100, 100, 0);
    //        const videoScreen1 = new THREE.Mesh(screen1, videoMaterial1b,);
    //        const videoScreen2 = new THREE.Mesh(screen2, videoMaterial1a,);
    //        scene.add(videoScreen1);
    //        videoScreen1.position.y = 0;
    //        scene.add(videoScreen2);
    //        videoScreen2.position.y = 0;
    //    
    //        
    //    
    //Load Models
    let loader = new THREE.GLTFLoader();

    loader.load("obj/dome2.gltf", function(gltf) {
        scene.add(gltf.scene);
        dome = gltf.scene;
        animate();
    });

    loader.load("obj/smile2.gltf", function(gltf) {
        scene.add(gltf.scene);
        smile = gltf.scene;
        animate();
    });

    loader.load("obj/stars2.gltf", function(gltf) {
        scene.add(gltf.scene);
        stars = gltf.scene;
        animate();
    });

    loader.load("obj/banana.gltf", function(gltf) {
        scene.add(gltf.scene);
        banana = gltf.scene;
        animate();
    });   

    loader.load("obj/crate2.gltf", function(gltf) {
        scene.add(gltf.scene);
        crate = gltf.scene;
        animate();
    });   

}

let stars;
let dome;
let smile;

function animate() {


    dome.scale.x = 6;
    dome.scale.y = 6;
    dome.scale.z = 6;
    dome.rotation.y += -.007; 
    dome.rotation.z += -.005; 


    smile.scale.x = 12;
    smile.scale.y = 12;
    smile.scale.z = 12;
    smile.rotation.y += .03;
    smile.rotation.z += .002;

    stars.scale.x = 100;
    stars.scale.y = 100;
    stars.scale.z = 100;
    stars.rotation.y += .0025;
    stars.rotation.z += .0008; 
    stars.rotation.x += .0008; 

    banana.scale.x = 2;
    banana.scale.y = 2;
    banana.scale.z = 2;
    banana.rotation.y += .0025;
    banana.rotation.z += .0008; 
    banana.rotation.x += .0008; 


    crate.scale.x = 1.2;
    crate.scale.y = 1.2;
    crate.scale.z = 1.2;
    crate.rotation.y += .0005;
    crate.rotation.z += .0034; 
    crate.rotation.x += .0004;      




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
controls.minDistance = 190;
controls.maxDistance = 500;

