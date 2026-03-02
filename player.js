class Player {
    constructor(scene, camera){
        this.scene = scene;
        this.camera = camera;
        this.speed = 0.5; // adjustable speed
        this.position = new THREE.Vector3(0, 1.2, 0);

        const loader = new THREE.GLTFLoader();
        loader.load('assets/motorcycles/motorcycle.glb', gltf => {
            this.mesh = gltf.scene;
            this.mesh.scale.set(1,1,1);
            this.scene.add(this.mesh);
        });
    }

    move(left, right, forward, backward){
        if(left) this.position.x -= 0.1;
        if(right) this.position.x += 0.1;
        if(forward) this.position.z -= this.speed;
        if(backward) this.position.z += this.speed;

        if(this.mesh) this.mesh.position.copy(this.position);

        // First-person camera
        this.camera.position.set(this.position.x, this.position.y + 1.2, this.position.z + 1.5);
        this.camera.lookAt(this.position.x, this.position.y + 1, this.position.z - 5);
    }
}
