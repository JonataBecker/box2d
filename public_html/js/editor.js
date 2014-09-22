var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;
var teste;

jQuery(document).ready( function() {

    for(i = 0; i < level.objects.length; i++) {
        object = level.objects[i];

        object = merge({
            rotation : 0,
            color: '#AABBFF',
            borderColor: '#88A0FF',
            borderWidth: 1
        }, object);

        level.objects[i] = object;
    }
    ctx = jQuery('canvas')[0].getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    render(ctx);
});

var renderPalco = function() {
    render(ctx);
};

var eml;

var addBola = function() {
    eml = { shape: 'ball', x : 30, y : 200, radius : 25, static: false, color: '#33FF33', borderColor: '#008000'};
};


var addEml = function(posX, posY) {
    eml.x = posX;
    eml.y = posY;

    level.objects.push(eml);
    ctx.clearRect(0, 0, 800, 600);
    renderPalco();

};