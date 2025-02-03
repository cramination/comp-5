import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import test-cube.add.gltf  from  'public/test-cube.gltf';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const light = new THREE.AmbientLight( 0x404040, 25 ); // soft white light
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


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const loader = new GLTFLoader();

loader.load(
  '/assets/test-cube.gltf', 
  (gltf) => { 
    // Called when the model is loaded
    const model = gltf.scene;
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


  cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	controls.update();
	renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );