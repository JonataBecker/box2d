var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;
var teste;

function setupWorld() {
    world = createWorld();
    initWorld(world);
}

function initWorld(world) {

    level = new Level();
    level.load('data/level1.json');

    for(i = 0; i < level.objects.length; i++) {
        createObject(world, level.objects[i], level);
    }
};

function step(cnt) {
    var timeStep = 1.0 / 60;
    var iteration = 1;
    world.Step(timeStep, iteration);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    render(ctx);
    setTimeout('step(' + (cnt || 0) + ')', 10);
}

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
