class GameModes {
    constructor(player, road, obstacles, ui) {
        this.player = player;
        this.road = road;
        this.obstacles = obstacles;
        this.ui = ui;
        this.mode = 'endless';
        this.timer = 0;
        this.distance = 0;
        this.missionCompleted = false;
    }

    setMode(mode) {
        this.mode = mode;
        this.reset();
    }

    reset() {
        this.timer = 0;
        this.distance = 0;
        this.missionCompleted = false;
        this.obstacles.obstacles = [];
        this.player.position.set(0,1.2,0);
    }

    update(deltaTime) {
        if(this.mode === 'endless') {
            this.distance += this.player.speed * deltaTime;
        }
        else if(this.mode === 'timeTrial') {
            this.timer += deltaTime;
            this.distance += this.player.speed * deltaTime;
        }
        else if(this.mode === 'mission') {
            this.distance += this.player.speed * deltaTime;
            if(this.distance >= 500 && !this.missionCompleted){
                this.missionCompleted = true;
                alert("Mission Complete!");
            }
        }
    }
}
