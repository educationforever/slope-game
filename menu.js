class MainMenu {
    constructor(scene, camera, gameModes){
        this.scene = scene;
        this.camera = camera;
        this.gameModes = gameModes;
        this.isVisible = true;
        this.initMenu();
    }

    initMenu(){
        const modes = ['Endless', 'Time Trial', 'Mission'];
        this.buttons = [];

        modes.forEach((mode, i) => {
            const btn = document.createElement("div");
            btn.classList.add("menu-button");
            btn.style.top = `${40 + i*10}%`;
            btn.innerText = mode;
            document.body.appendChild(btn);
            btn.onclick = () => {
                this.hide();
                this.gameModes.setMode(mode.toLowerCase());
                gameState.start();
            };
            this.buttons.push(btn);
        });
    }

    hide(){
        this.isVisible = false;
        this.buttons.forEach(btn => btn.style.display = "none");
    }

    show(){
        this.isVisible = true;
        this.buttons.forEach(btn => btn.style.display = "block");
    }

    update(){}
}
