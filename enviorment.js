class Environment {
    constructor(scene){
        this.scene = scene;
        this.buildings = [];
        this.props = [];
        this.loadSkybox();
        this.generateCity();
    }

    loadSkybox(){
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            'assets/skybox/px.jpg',
            'assets/skybox/nx.jpg',
            'assets/skybox/py.jpg',
            'assets/skybox/ny.jpg',
            'assets/skybox/pz.jpg',
            'assets/skybox/nz.jpg'
        ]);
        this.scene.background = texture;
    }

    generateCity(){
        const loader = new THREE.GLTFLoader();
        for(let i=-5;i<=5;i+=3){
            for(let z=-50; z>-1000; z-=50){
                loader.load('assets/buildings/building1.glb', gltf => {
                    const building = gltf.scene;
                    building.position.set(i*10,0,z);
                    building.scale.set(5,5,5);
                    this.scene.add(building);
                    this.buildings.push(building);
                });

                loader.load('assets/props/streetlight.glb', gltf => {
                    const light = gltf.scene;
                    light.position.set(i*10+5,0,z);
                    this.scene.add(light);
                    this.props.push(light);
                });
            }
        }
    }

    update(playerZ){
        this.buildings.forEach(b => {
            if(b.position.z - playerZ > 50){
                b.position.z -= 1000;
            }
        });
        this.props.forEach(p => {
            if(p.position.z - playerZ > 50){
                p.position.z -= 1000;
            }
        });
    }
}
