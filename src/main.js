import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import test-cube.add.gltf  from  'public/test-cube.gltf';

const scene = new THREE.Scene();
scene.background = new THREE.Color((4, 4, 34) );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const light = new THREE.AmbientLight( 0x404040, 50 ); // soft white light
scene.add( light );

const light2 = new THREE.PointLight( 0xFFC0CB, 2, 100 );
light2.position.set( -6.5, 0, 6 );
scene.add( light2 );

const light3 = new THREE.PointLight( 0xFFC0CB, 1.5, 100 );
light3.position.set( 1, 1, 3);
scene.add( light3 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

controls.target.set(1, .5, 3.6)
controls.maxDistance = 4;
controls.enablePan = false
controls.minDistance = .5

camera.position.set(3, .5, 6)

function onWindowResize() {
  // Get the new window dimensions
  const width = window.innerWidth;
  const height = window.innerHeight;
renderer.setSize( width, height );

camera.aspect = width / height;

camera.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize);
onWindowResize();controls.target.set(1, .5, 3.6)
controls.maxDistance = 4;
controls.enablePan = false
controls.minDistance = .5

camera.position.set(3, .5, 6)

window.addEventListener('resize', onWindowResize);
onWindowResize();

// Objects

const video =  document.getElementById("film");
const video3 =  document.getElementById("film3");
const video4 =  document.getElementById("film4");
const video5 =  document.getElementById("film5");
const texture = new
THREE.VideoTexture(video);
const texture3 = new
THREE.VideoTexture(video3);
const texture4 = new
THREE.VideoTexture(video4);
const texture5 = new
THREE.VideoTexture(video5);


const geometry = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture = new THREE.VideoTexture(video);
  const videoMaterial =  new THREE.MeshBasicMaterial( {
    map: videoTexture, 
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.9
  } );
  const cylinder = new THREE.Mesh( geometry, videoMaterial ); 
  scene.add( cylinder );
  cylinder.rotation.x += Math.PI / 2;
  cylinder.position.set (.978, .67, 3.564)
  cylinder.scale.set(.115, .13, .115)
  videoTexture.repeat.set(0.6, 0.6);
  videoTexture.offset.set(0.18, 0.18);

 
  const geometry2 = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture2 = new THREE.VideoTexture(video3);
  const videoMaterial2 =  new THREE.MeshBasicMaterial( {
    map: videoTexture2,
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.3 
  } );
  const cylinder2 = new THREE.Mesh( geometry2, videoMaterial2 ); 
  scene.add( cylinder2 );
  cylinder2.rotation.x += Math.PI / 2;
  cylinder2.rotation.z += Math.PI / 2;
  cylinder2.position.set (.607, .695, 3.72)
  cylinder2.scale.set(.16, .07, .16)


  const geometry3 = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture3 = new THREE.VideoTexture(video3);
  const videoMaterial3 =  new THREE.MeshBasicMaterial( {
    map: videoTexture3, 
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.5
  } );
  const cylinder3 = new THREE.Mesh( geometry3, videoMaterial3 ); 
  scene.add( cylinder3 );
  cylinder3.rotation.x += Math.PI / 2;
  cylinder3.rotation.z += Math.PI / 2;
  cylinder3.position.set (1.71, .73, 3.72)
  cylinder3.scale.set(.16, .07, .16)


  const geometry4 = new THREE.CylinderGeometry( 1, 1, 1, 32 ); 
  const videoTexture4 = new THREE.VideoTexture(video3);
  const videoMaterial4 =  new THREE.MeshBasicMaterial( {
    map: videoTexture4, 
    side: THREE.FrontSide, 
    toneMapped: false,
    transparent: true,
    opacity: 0.5
  } );
  const cylinder4 = new THREE.Mesh( geometry4, videoMaterial4 ); 
  scene.add( cylinder4 );
  cylinder4.rotation.x += Math.PI / 2;
  cylinder4.rotation.z += Math.PI / 2;
  cylinder4.position.set (1.71, .4, 3.72)
  cylinder4.scale.set(.16, .07, .16)
  

  const geometry5 = new THREE.BoxGeometry( 1, 1, 1 ); 
  const videoTexture10 = new THREE.VideoTexture(video5);
  const videoTexture11 = new THREE.VideoTexture(video4);
  const material5 = [
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture11, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture11, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture10, side: THREE.DoubleSide, toneMapped: false
    } ),
  ];
  const cube = new THREE.Mesh( geometry5, material5 ); 
  cube.position.set (1.203, .69, 3.465)
  cube.scale.set(.029, .35, .029)
  videoTexture10.repeat.set(0.6, 0.6);
  scene.add( cube );



  const geometry6 = new THREE.BoxGeometry( 1, 1, 1 ); 
  const videoTexture7 = new THREE.VideoTexture(video5);
  const videoTexture9 = new THREE.VideoTexture(video4);

  const material6 = [
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture9, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture9, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
    new THREE.MeshBasicMaterial( {
      map: videoTexture7, side: THREE.DoubleSide, toneMapped: false
    } ),
  ];
  const cube2 = new THREE.Mesh( geometry6, material6 );
  cube2.position.set (1.262, .69, 3.465)
  cube2.scale.set(.029, .35, .029)
  videoTexture7.repeat.set(0.6, 0.6);
  videoTexture7.offset.set(0.52, 0.52);
  scene.add( cube2 );

  

  const geometry7 = new THREE.PlaneGeometry( 1, 1, );
  const videoTexture8 = new THREE.VideoTexture(video5);
  const material7 = new THREE.MeshBasicMaterial( {map: videoTexture8, side: THREE.DoubleSide, toneMapped: false} );
  const plane = new THREE.Mesh( geometry7, material7 );
  plane.position.set (1.366, .219, 3.372)
  plane.scale.set(.03, .205, .02)
  scene.add( plane );

const loader = new GLTFLoader();

loader.load(
  './assets/Computer-case-compressed.gltf', 
  (gltf) => { 
    // Called when the model is loaded
    const model = gltf.scene;
    model.position.set(-.6, 0, 3.6)
    model.scale.set(2, 2, 2)
    scene.add(model); // Add the model to your Three.js scene
  }, 
  (xhr) => { 
    // Called while the model is loading
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  }, 
  (error) => { 
    // Called if there's an error loading the model
    console.error('An error occurred:', error);
  }
);


function animate() {


	controls.update();
	renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );