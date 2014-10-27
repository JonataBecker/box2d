/**
 * Classe responsável pelo desenho do palco
 */
var Palco = (function() {
    var palco = {};
    palco.width = 800;
    palco.height = 600;
    palco.posXMenu = 0;
    palco.posX = 0;
    palco.posY = 0;
    palco.boxExt = 30;
    palco.boxInt = 10;
    // Desenha tela
    palco.drawPalco = function() {
        palco.drawing = document.getElementById("palco_background");
        var w = Math.ceil(palco.width / palco.boxExt);
        var h = Math.ceil(palco.height / palco.boxExt);
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
        palco.posX = ((boxWidth - palco.width) / 2);
        palco.posY = ((boxHeight - palco.height) / 2);
        palco.posXMenu = palco.posX + jQuery('#painel_menu').width();
        // Define posição do palco
        jQuery(".palco").css({"left": palco.posX + "px"});
        jQuery(".palco").css({"top": palco.posY + "px"});
        // Adiciona background
        jQuery("#palco_background").remove();
        jQuery(".palco").append("<canvas id='palco_background'></canvas>");
        // Define tamanho do palco
        jQuery(".palco canvas").attr("width", palco.width);
        jQuery(".palco canvas").attr("height", palco.height);
        renderPalco();
    };
    return {
        draw:function(width, height){
            palco.width = width;
            palco.height = height;
            palco.ajustaTamanho();
            palco.drawPalco();
        },
        getPosXMenu: function() {
            return palco.posXMenu;
        },
        getPosX: function() {
            return palco.posX;
        },
        getPosY: function() {
            return palco.posY;
        },
        getWidth: function() {
            return palco.width;
        },
        getHeight: function() {
            return palco.height;
        }
    };
}());

jQuery(document).ready(function() {
    Palco.draw(800, 600);
});