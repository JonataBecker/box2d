var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;
var teste;

Event.observe(window, 'load', function() {
    
    for(i = 0; i < level.objects.length; i++) {
        object = level.objects[i];
        
        object = merge({
            rotation : 0,
            color: '#AABBFF',
            borderColor: '#88A0FF',
            borderWidth: 1,
        }, object);
        
        level.objects[i] = object;
    }

    
    ctx = $('canvas').getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    render(ctx);
});
