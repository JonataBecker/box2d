var world = createWorld();
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;
var teste;

jQuery(document).ready( function() {
    level = new Level();
    level.load('data/level1.json');

    ctx = jQuery('canvas')[0].getContext('2d');
    renderPalco();
});

var renderPalco = function() {
    ctx.clearRect(0, 0, 800, 600);
    render(ctx);
};

jQuery(document).ready(function(){
    jQuery('.painel a').click(function(e){
        e.preventDefault();
        jQuery('.painel a').removeClass("sel");
        jQuery(this).addClass("sel");
        
        eventController.setElemento(new CircController(level));
    });
});