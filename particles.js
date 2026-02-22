import * as THREE from 'three';
import { settings } from './settings.js';

export let particles, particleGeo;

export function createParticles(scene) {
    particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(settings.particleCount*3);
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions,3));
    const particleMat = new THREE.PointsMaterial({color:0xff0000, size:0.25});
    particles = new THREE.Points(particleGeo,particleMat);
    scene.add(particles);
}

export function spawnParticles(ball) {
    if(!particles) return;
    const pos = particleGeo.attributes.position.array;
    for(let i=0;i<settings.particleCount;i++){
        pos[i*3]=ball.position.x+(Math.random()-0.5)*2;
        pos[i*3+1]=ball.position.y+(Math.random()-0.5)*2;
        pos[i*3+2]=ball.position.z+(Math.random()-0.5)*2;
    }
    particleGeo.attributes.position.needsUpdate=true;
}
