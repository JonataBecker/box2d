var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;
var teste;

Event.observe(window, 'load', function() {
    ctx = $('canvas').getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    render(ctx);
});

Event.observe(window, 'click', function() {
    level.objects[3].x = 500;
    level.objects[3].y = 100;
    render(ctx);
});