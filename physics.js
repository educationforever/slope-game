// Placeholder physics: can expand later
class Physics {
    static applyGravity(object, deltaTime){
        // For future jumping/falling mechanics
        if(object.position.y > 1.2){
            object.position.y -= 9.8 * deltaTime;
        } else {
            object.position.y = 1.2;
        }
    }

    static collision(a, b){
        // Simple bounding box collision
        if(!a.mesh || !b.mesh) return false;
        const boxA = new THREE.Box3().setFromObject(a.mesh);
        const boxB = new THREE.Box3().setFromObject(b.mesh);
        return boxA.intersectsBox(boxB);
    }
}
