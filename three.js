import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Configurar la escena
const scene = new THREE.Scene();

// Configurar la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configurar el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear una geometría de piso
const floorGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);

// Crear un material amarillo
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });

// Combinar la geometría y el material en una malla
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotar el piso para que esté en el suelo
scene.add(floor);

// Agregar una luz ambiental
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Renderizar la escena
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
