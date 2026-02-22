import * as THREE from 'three';
import { curve } from './tunnel.js';

export let platforms = [];
const platformWidth = 10;
const platformLength = 5;

export function createPlatforms(scene) {
    for(let i=0;i<curve.points.length;i++){
        const point = curve.points[i];
        if(Math.random()<0.15) continue;
        const geo = new THREE.BoxGeometry(platformWidth,1,platformLength);
        const color = new THREE.Color().setHSL(Math.random(),1,0.5);
        const mat = new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:0.7});
        const p = new THREE.Mesh(geo, mat);
        p.position.copy(point);
        p.rotation.y = Math.random()*0.4-0.2;
        scene.add(p);
        platforms.push(p);
    }
}

export function checkCollision(ball) {
    for(let p of platforms){
        const dx = ball.position.x - p.position.x;
        const dy = ball.position.y - p.position.y;
        const dz = ball.position.z - p.position.z;
        if(Math.abs(dx)<platformWidth/2 && Math.abs(dy)<1.5 && Math.abs(dz)<platformLength/2) return true;
    }
    return false;
}
