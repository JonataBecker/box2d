
var EventController = function() {
    
    var elemento = null;
    
    var getPosicao = function(e) {
        var posicao = {
            pageX: e.pageX - Palco.getPosXMenu(),
            pageY: e.pageY - Palco.getPosY()
        };
        return posicao;
    };
    
    var isPossuiElemento = function() {
        return elemento !== null;
    };
    
    
    jQuery('#palco').mousedown(function(e) {
        if (!isPossuiElemento()) {
            return;
        }
        var posicao = getPosicao(e);
        elemento.mousedown(posicao.pageX, posicao.pageY);
        renderPalco();
    });
    
    
    jQuery('#palco').mouseup(function(e) {
        if (!isPossuiElemento()) {
            return;
        } 
        elemento.mouseup(e.offsetX, e.offsetY);
        renderPalco();
    });
    
    jQuery('#palco').mousemove(function(e) {
        if (!isPossuiElemento()) {
            return;
        }
        var posicao = getPosicao(e);
        elemento.mousemove(posicao.pageX, posicao.pageY);
        renderPalco();
    });
    
  
    return  {
        setElemento: function(obj) {
            elemento = obj;
        }
    };
};
var eventController;
jQuery(document).ready(function(){
    eventController = new EventController();
});


