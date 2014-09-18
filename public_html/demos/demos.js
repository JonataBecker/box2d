var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;

function setupWorld() {
    world = createWorld();
    initWorld(world);
}

function initWorld(world) {
//	createBall(world, 350, 100, 50, true);
//	var pendulum = createBox(world, 150, 100, 20, 20, false);
//	var jointDef = new b2RevoluteJointDef();
//	jointDef.body1 = pendulum;
//	jointDef.body2 = world.GetGroundBody();
//	jointDef.anchorPoint = pendulum.GetCenterPosition();
//	world.CreateJoint(jointDef);
//
//	var seesaw = createPoly(world, 300, 200, [[0, 0], [100, 30], [-100, 30]]);
//	jointDef.body1 = seesaw;
//	jointDef.anchorPoint = seesaw.GetCenterPosition();
//	world.CreateJoint(jointDef);
    level.objects.forEach(function(object) {
        object = merge({
            color: '#AABBFF',
            borderColor: '#88A0FF',
            borderWidth: 1,
        }, object);
        switch(object.shape) {
            case 'rect':
                 createRect(world, object.x, object.y, object.width, object.height, object.static, object);
                 break;
        }
    });
    

};

function step(cnt) {
    var timeStep = 1.0 / 60;
    var iteration = 1;
    world.Step(timeStep, iteration);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawWorld(world, ctx);
    setTimeout('step(' + (cnt || 0) + ')', 10);
}
Event.observe(window, 'load', function() {
    setupWorld();
    ctx = $('canvas').getContext('2d');
    var canvasElm = $('canvas');
    canvasWidth = parseInt(canvasElm.width);
    canvasHeight = parseInt(canvasElm.height);
    canvasTop = parseInt(canvasElm.style.top);
    canvasLeft = parseInt(canvasElm.style.left);

    step();
});
