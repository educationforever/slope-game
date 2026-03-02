class Road {
    constructor(scene){
        this.scene = scene;
        this.segments = [];
        this.segmentLength = 50;
        this.init();
    }

    init(){
        const texLoader = new THREE.TextureLoader();
        const roadTex = texLoader.load('assets/road_texture.jpg');
        roadTex.wrapS = roadTex.wrapT = THREE.RepeatWrapping;

        const geometry = new THREE.PlaneGeometry(10, this.segmentLength);
        const material = new THREE.MeshStandardMaterial({ map: roadTex });
        for(let i=0;i<10;i++){
            const segment = new THREE.Mesh(geometry, material);
            segment.rotation.x = -Math.PI/2;
            segment.position.z = -i*this.segmentLength;
            this.scene.add(segment);
            this.segments.push(segment);
        }
    }

    update(playerZ){
        this.segments.forEach(seg => {
            if(seg.position.z - playerZ > 25){
                seg.position.z -= this.segmentLength * this.segments.length;
            }
        });
    }
}
