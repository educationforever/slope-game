import { move } from './ball.js';

let touchStartX=null;

export function initControls() {
    document.addEventListener("keydown", e=>{
        if(e.key==="ArrowLeft") move=-0.4;
        if(e.key==="ArrowRight") move=0.4;
    });
    document.addEventListener("keyup", ()=>{ move=0; });
    document.addEventListener("touchstart", e=>{ touchStartX=e.touches[0].clientX; });
    document.addEventListener("touchmove", e=>{
        if(touchStartX!==null) move=(e.touches[0].clientX-touchStartX)*0.003;
    });
    document.addEventListener("touchend", ()=>{ move=0; touchStartX=null; });
}
