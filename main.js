let scene, camera, renderer;
let menu, player, road, obstacles, environment, ui, gameModes;
let keys = {};
let gameState = { running: false, start: () => { gameState.running = true; } };

init();
animate();

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas'), antialias:true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0,20,10);
    scene.add(dirLight);

    player = new Player(scene, camera);
    road = new Road(scene);
    obstacles = new ObstaclesManager(scene);
    environment = new Environment(scene);
    ui = new UI();
    gameModes = new GameModes(player, road, obstacles, ui);
    menu = new MainMenu(scene, camera, gameModes);

    window.addEventListener('keydown', e => keys[e.key.toLowerCase()] = true);
    window.addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);
}

let lastTime = performance.now();
function animate(){
    requestAnimationFrame(animate);
    const now = performance.now();
    const deltaTime = (now - lastTime)/1000;
    lastTime = now;

    if(menu.isVisible){
        menu.update();
        renderer.render(scene, camera);
        return;
    }

    if(gameState.running){
        player.move(keys['arrowleft'], keys['arrowright'], keys['arrowup'], keys['arrowdown']);
        road.update(player.position.z);
        obstacles.update(player.speed);
        environment.update(player.position.z);
        gameModes.update(deltaTime);
    }

    renderer.render(scene, camera);
}
