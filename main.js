import { createBall, updateBall } from './ball.js';
import { createTunnel, walls } from './tunnel.js';
import { createPlatforms } from './platforms.js';
import { createParticles, spawnParticles } from './particles.js';
import { initControls } from './controls.js';
import { initUI, updateUI } from './ui.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 3000);
camera.position.set(0,5,15);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Postprocessing
const composer = new THREE.EffectComposer(renderer);
composer.addPass(new THREE.RenderPass(scene, camera));
composer.addPass(new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85));

// Lights
scene.add(new THREE.AmbientLight(0xffffff,0.5));
const pointLight = new THREE.PointLight(0x00ff00,2,200);
pointLight.position.set(0,15,15);
scene.add(pointLight);

// Initialize modules
createBall(scene);
createTunnel(scene);
createPlatforms(scene);
createParticles(scene);
initControls();
initUI();

// Animation
function animate(){
    requestAnimationFrame(animate);
    updateBall();
    spawnParticles();
    updateUI();
    composer.render();
}
animate();

window.addEventListener("resize",()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});
