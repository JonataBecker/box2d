var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;
var teste;
var keyMap = [];

function setupWorld() {
    world = createWorld();
    initWorld(world);
}

function initWorld(world) {

    level = new Level();
    level.load('data/level1.json');

    for(i = 0; i < level.objects.length; i++) {
        if(level.objects[i].shape === 'player') {
            level.player = createObject(world, level.objects[i], level);
        } else {
            createObject(world, level.objects[i], level);
        }
    }
    level.player.initHinges();
};

function step(cnt) {
    var timeStep = 1.0 / 60;
    var iteration = 1;
    world.Step(timeStep, iteration);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    render(ctx);
    setTimeout('step(' + (cnt || 0) + ')', 10);
}

document.addEventListener("keydown", function(event) {
    // Registra no KeyMap
    keyMap[event.keyCode] = true;
    
    if(event.keyCode === 37) {
        event.preventDefault();
        level.player.ragdollLeft();
    }
    if(event.keyCode === 39) {
        event.preventDefault();
        level.player.ragdollRight();
    }
    if(event.keyCode === 38) {
        event.preventDefault();
        level.player.ragdollUp();
    }
    if(event.keyCode === 40) {
        event.preventDefault();
        level.player.ragdollDown();
    }
}, false);

document.addEventListener("keyup", function(event) {
    // Registra no KeyMap
    keyMap[event.keyCode] = false;

    level.player.ragdollRelease();
}, false);

Event.observe(window, 'load', function() {
    setupWorld();
    console.log(level.objects[0]);
    ctx = $('canvas').getContext('2d');
    var canvasElm = $('canvas');
    canvasWidth = parseInt(canvasElm.width);
    canvasHeight = parseInt(canvasElm.height);
    canvasTop = parseInt(canvasElm.style.top);
    canvasLeft = parseInt(canvasElm.style.left);

    step();
});
