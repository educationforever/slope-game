import * as THREE from 'three';

export let ball;
export let move = 0;

export function createBall(scene) {
    const geo = new THREE.SphereGeometry(1.2,32,32);
    const mat = new THREE.MeshStandardMaterial({color:0x00ff00, emissive:0x00ff00, emissiveIntensity:1});
    ball = new THREE.Mesh(geo, mat);
    ball.position.set(0,1.2,0);
    scene.add(ball);
}

export function updateBall() {
    if (!ball) return;
    ball.position.x += move;
}
