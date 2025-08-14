
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x040422);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 0.5, 6);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
scene.add(new THREE.AmbientLight(0x404040, 50));

const pointLight1 = new THREE.PointLight(0xFFC0CB, 2, 100);
pointLight1.position.set(-6.5, 0, 6);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xFFC0CB, 1.5, 100);
pointLight2.position.set(1, 1, 3);
scene.add(pointLight2);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(1, 0.5, 3.6);
controls.maxDistance = 4;
controls.minDistance = 0.5;
controls.enablePan = false;


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);
onWindowResize();

// Video setup helper
function setupVideo(id) {
  const video = document.getElementById(id);
  if (video) {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;

    // Some browsers require explicit play
    video.play().catch((err) => {
      console.warn(`Failed to autoplay video ${id}:`, err);
    });

    return new THREE.VideoTexture(video);
  }
  return null;
}

// video textures
const texture1 = setupVideo("film");
const texture2 = setupVideo("film3");
const texture3 = setupVideo("film4");
const texture4 = setupVideo("film5");

// Cylinder 1
const cylinder1 = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 1, 32),
  new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.FrontSide,
    toneMapped: false,
    transparent: true,
    opacity: 0.9,
  })
);
cylinder1.rotation.x = Math.PI / 2;
cylinder1.position.set(0.978, 0.67, 3.564);
cylinder1.scale.set(0.115, 0.13, 0.115);
if (texture1) {
  texture1.repeat.set(0.6, 0.6);
  texture1.offset.set(0.18, 0.18);
}
scene.add(cylinder1);

// Cylinder 2
const cylinder2 = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 1, 32),
  new THREE.MeshBasicMaterial({
    map: texture2,
    side: THREE.FrontSide,
    toneMapped: false,
    transparent: true,
    opacity: 0.3,
  })
);
cylinder2.rotation.set(Math.PI / 2, 0, Math.PI / 2);
cylinder2.position.set(0.607, 0.695, 3.72);
cylinder2.scale.set(0.16, 0.07, 0.16);
scene.add(cylinder2);

// Cylinder 3 (duplicate of 2)
const cylinder3 = cylinder2.clone();
cylinder3.material = new THREE.MeshBasicMaterial({
  map: texture2,
  side: THREE.FrontSide,
  toneMapped: false,
  transparent: true,
  opacity: 0.5,
});
cylinder3.position.set(1.71, 0.73, 3.72);
scene.add(cylinder3);

// Cylinder 4 (duplicate of 3)
const cylinder4 = cylinder3.clone();
cylinder4.position.set(1.71, 0.4, 3.72);
scene.add(cylinder4);

// Box 1
const boxMaterials1 = [texture4, texture4, texture3, texture3, texture4, texture4].map(
  tex => new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, toneMapped: false })
);
const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), boxMaterials1);
cube1.position.set(1.203, 0.69, 3.465);
cube1.scale.set(0.029, 0.35, 0.029);
if (texture4) texture4.repeat.set(0.6, 0.6);
scene.add(cube1);

// Box 2
const boxMaterials2 = [texture4, texture4, texture3, texture3, texture4, texture4].map(
  tex => new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, toneMapped: false })
);
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), boxMaterials2);
cube2.position.set(1.262, 0.69, 3.465);
cube2.scale.set(0.029, 0.35, 0.029);
if (texture4) texture4.offset.set(0.52, 0.52);
scene.add(cube2);

// Plane
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  new THREE.MeshBasicMaterial({ map: texture4, side: THREE.DoubleSide, toneMapped: false })
);
plane.position.set(1.366, 0.219, 3.372);
plane.scale.set(0.03, 0.205, 0.02);
scene.add(plane);

// GLTF model
const loader = new GLTFLoader();
loader.load(
  './assets/Computer-case-compressed.gltf',
  (gltf) => {
    const model = gltf.scene;
    model.position.set(-0.6, 0, 3.6);
    model.scale.set(2, 2, 2);
    scene.add(model);
  },
  (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
  (error) => console.error('An error occurred:', error)
);

// Animation loop
function animate() {
  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
