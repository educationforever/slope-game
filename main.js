import { createBall, updateBall } from './ball.js';
import { createTunnel, walls } from './tunnel.js';
import { createPlatforms, platforms, checkCollision } from './platforms.js';
import { createParticles, particles, spawnParticles } from './particles.js';
import { initControls, move } from './controls.js';
import { initUI, score, highScore, updateUI } from './ui.js';
import { settings } from './settings.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 3000);
camera.position.set(0,5,15);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Postprocessing (bloom)
const composer = new THREE.EffectComposer(renderer);
composer.addPass(new THREE.RenderPass(scene, camera));
composer.addPass(new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85));

// Initialize game objects
createBall(scene);
createTunnel(scene);
createPlatforms(scene);
createParticles(scene);
initControls();
initUI();

// Game loop
function animate() {
    requestAnimationFrame(animate);
    updateBall();
    checkCollision();
    spawnParticles();
    updateUI();
    composer.render();
}
animate();

// Resize
window.addEventListener("resize", ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});
