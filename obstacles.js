class Obstacle {
    constructor(scene, modelPath, x, z){
        this.scene = scene;
        const loader = new THREE.GLTFLoader();
        loader.load(modelPath, gltf => {
            this.mesh = gltf.scene;
            this.mesh.position.set(x, 0, z);
            this.scene.add(this.mesh);
        });
    }

    move(speed){
        if(this.mesh) this.mesh.position.z += speed;
    }
}

class ObstaclesManager {
    constructor(scene){
        this.scene = scene;
        this.obstacles = [];
        this.models = ['assets/vehicles/car1.glb','assets/vehicles/truck1.glb','assets/vehicles/bus.glb'];
        this.spawnDistance = -50;
    }

    spawn(){
        const x = (Math.floor(Math.random()*3)-1) * 3; // 3 lanes
        const model = this.models[Math.floor(Math.random()*this.models.length)];
        this.obstacles.push(new Obstacle(this.scene, model, x, this.spawnDistance));
    }

    update(speed){
        this.obstacles.forEach(ob => ob.move(speed));
        this.obstacles = this.obstacles.filter(ob => ob.mesh && ob.mesh.position.z < 10);
    }
}
