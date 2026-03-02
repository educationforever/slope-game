class SoundEngine {
    constructor(){
        this.listener = new THREE.AudioListener();
        this.sounds = {};
    }

    loadSound(name, path, loop=false, volume=0.5){
        const audio = new THREE.Audio(this.listener);
        const loader = new THREE.AudioLoader();
        loader.load(path, buffer => {
            audio.setBuffer(buffer);
            audio.setLoop(loop);
            audio.setVolume(volume);
        });
        this.sounds[name] = audio;
    }

    play(name){
        if(this.sounds[name]) this.sounds[name].play();
    }

    stop(name){
        if(this.sounds[name]) this.sounds[name].stop();
    }
}
