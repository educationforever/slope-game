class UI {
    constructor(){
        this.distanceEl = document.createElement('div');
        this.distanceEl.style.position = 'absolute';
        this.distanceEl.style.top = '10px';
        this.distanceEl.style.left = '10px';
        this.distanceEl.style.color = 'white';
        this.distanceEl.style.fontSize = '18px';
        document.body.appendChild(this.distanceEl);

        this.timerEl = document.createElement('div');
        this.timerEl.style.position = 'absolute';
        this.timerEl.style.top = '30px';
        this.timerEl.style.left = '10px';
        this.timerEl.style.color = 'white';
        this.timerEl.style.fontSize = '18px';
        document.body.appendChild(this.timerEl);
    }

    updateDistance(distance){
        this.distanceEl.innerText = "Distance: " + Math.floor(distance) + " m";
    }

    updateTime(time){
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time % 60);
        this.timerEl.innerText = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}
