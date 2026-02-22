import { ball } from './ball.js';
import { platforms, checkCollision } from './platforms.js';

export let score = 0;
let scoreEl = document.getElementById("score");
export let highScore = parseInt(localStorage.getItem("highScore"))||0;
let highScoreEl = document.getElementById("highscore");

export function initUI() {
    document.getElementById("fullscreenBtn").addEventListener("click", ()=>{
        if(!document.fullscreenElement) document.body.requestFullscreen();
        else document.exitFullscreen();
    });
}

export function updateUI() {
    score += 1;
    scoreEl.textContent="Score: "+score;
    if(score>highScore){
        highScore=score;
        localStorage.setItem("highScore",highScore);
        highScoreEl.textContent="High Score: "+highScore;
    }

    if(!checkCollision(ball)){
        setTimeout(()=>location.reload(),1000);
    }
}
