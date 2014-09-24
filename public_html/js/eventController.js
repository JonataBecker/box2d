
var EventController = function() {
    
    var elemento;
    
    var isPossuiElemento = function() {
        return elemento != null;
    };
    
    
    jQuery('#palco').mousedown(function(e) {
        if (!isPossuiElemento()) {
            return;
        } 
        
        elemento.mousedown(e.offsetX, e.offsetY);
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
        
        elemento.mousemove(e.offsetX, e.offsetY);
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

