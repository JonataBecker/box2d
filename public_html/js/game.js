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
    for(i = 0; i < level.objects.length; i++) {
        object = level.objects[i];
        
        object = merge({
            color: '#AABBFF',
            borderColor: '#88A0FF',
            borderWidth: 1,
            bodyRef: null,
        }, object);
        createObject(world, object);
        
        level.objects[i]= object;
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

Event.observe(window, 'click', function() {
    level.objects[3].bodyRef.m_position.Set(500, 100);
});