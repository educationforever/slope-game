import * as THREE from 'three';

export let curve, walls = [];

export function createTunnel(scene) {
    const points = [];
    let x=0,y=0,z=0;
    for(let i=0;i<400;i++){
        x+=(Math.random()-0.5)*4;
        y+=(Math.random()-0.5)*2;
        z-=5;
        points.push(new THREE.Vector3(x,y,z));
    }
    curve = new THREE.CatmullRomCurve3(points);
    curve.tension = 0.5;

    // Walls
    for(let i=0;i<points.length;i+=2){
        const p = points[i];
        const hue = Math.random();
        const color = new THREE.Color().setHSL(hue,1,0.5);
        const left = new THREE.Mesh(new THREE.BoxGeometry(8,8,2), new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:0.8}));
        left.position.set(p.x-10,p.y+4,p.z);
        scene.add(left); walls.push(left);

        const right = new THREE.Mesh(new THREE.BoxGeometry(8,8,2), new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:0.8}));
        right.position.set(p.x+10,p.y+4,p.z);
        scene.add(right); walls.push(right);
    }
}
