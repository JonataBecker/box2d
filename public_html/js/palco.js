/**
 * Classe responsável pelo desenho do palco
 * 
 * @param width
 * @param height
 */
var Palco = function(width, height) {
    var palco = {};
    palco.width = width;
    palco.height = height;
    palco.boxExt = 30;
    palco.boxInt = 10;
    // Desenha tela
    palco.drawPalco = function() {
        palco.drawing = document.getElementById("palco_background");
        var w = Math.ceil(width / palco.boxExt);
        var h = Math.ceil(height / palco.boxExt);
        // Percorre box externo
        for (var x = 0; x < w; x++) {
            for (var y = 0; y < h; y++) {
                var posX = x * palco.boxExt;
                var posY = y * palco.boxExt;
                palco.drawBox(posX, posY, 0.8, palco.boxExt);
                // Desenha box interno
                palco.drawBoxInt(posX, posY);
            }
        }
    };
    // Desenha box interno
    palco.drawBoxInt = function(posXExt, posYExt) {
        var s = Math.ceil(palco.boxExt / palco.boxInt);
        // Percorre box externo
        for (var x = 0; x < s; x++) {
            for (var y = 0; y < s; y++) {
                var posX = posXExt + x * palco.boxInt;
                var posY = posYExt + y * palco.boxInt;
                palco.drawBox(posX, posY, 0.2, palco.boxInt);
            }
        }
    };
    // Desenha box
    palco.drawBox = function(posX, posY, lineWidth, size) {
        var con = palco.drawing.getContext("2d");
        con.strokeStyle = "#999";
        con.lineWidth = lineWidth;
        con.strokeRect(posX, posY, size, size);
    };
    // Ajusta tamanho do palco
    palco.ajustaTamanho = function() {
        var boxWidth = jQuery('.box_palco').width();
        var boxHeight= jQuery('.box_palco').height();
        // Define posição do palco
        jQuery(".palco").css({"left":((boxWidth - palco.width) / 2) + "px"});
        jQuery(".palco").css({"top":((boxHeight - palco.height) / 2) + "px"});
        // Adiciona background
        jQuery("#palco_background").remove();
        jQuery(".palco").append("<canvas id='palco_background'></canvas>");
        // Define tamanho do palco
        jQuery(".palco canvas").attr("width", palco.width);
        jQuery(".palco canvas").attr("height", palco.height);
    };
    return {
        draw:function(){
            palco.ajustaTamanho();            
            palco.drawPalco();
        }
    };
};

jQuery(document).ready(function() {
    var palco = new Palco(800, 600);
    palco.draw();
});