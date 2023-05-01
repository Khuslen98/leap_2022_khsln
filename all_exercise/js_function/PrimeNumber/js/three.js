// function isPrime(num) {
//     if(num < 2){
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(5));
// Set up the Three.js scene and renderer
import * as THREE from "three";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a light to the scene
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 50);
scene.add(light);

// Create a fish mesh and add it to the scene
var fishGeometry = new THREE.BoxGeometry(1, 0.5, 0.2);
var fishMaterial = new THREE.MeshStandardMaterial({ color: 0x0099ff });
var fish = new THREE.Mesh(fishGeometry, fishMaterial);
fish.position.set(0, 0, -5);
scene.add(fish);

// Animate the fish to swim back and forth
var swimDirection = 1;
function animate() {
  requestAnimationFrame(animate);
  fish.position.x += 0.1 * swimDirection;
  if (fish.position.x > 5 || fish.position.x < -5) {
    swimDirection *= -1;
  }
  renderer.render(scene, camera);
}
animate();
