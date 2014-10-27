/**
 * Classe responsável controle de eventos
 */
var EventController = function() {
    /** Evento em seleção */
    var elemento = null;
    /**
     * Retorna posição 
     * 
     * @param {int} e
     * @returns {EventController.getPosicao.posicao}
     */
    var getPosicao = function(e) {
        var posicao = {
            pageX: e.pageX - Palco.getPosXMenu(),
            pageY: e.pageY - Palco.getPosY()
        };
        return posicao;
    };
    /**
     * Retorna se possui elemento selecionado
     * 
     * @returns {Boolean}
     */
    var isPossuiElemento = function() {
        return elemento !== null;
    };
    /**
     * Adiciona evento de clique down do mouse
     * 
     * @param e
     */
    Palco.getObj().mousedown(function(e) {
        if (!isPossuiElemento()) {
            return;
        }
        var posicao = getPosicao(e);
        elemento.mousedown(posicao.pageX, posicao.pageY);
        renderPalco();
    });
    /**
     * Adiciona evento de cliente up do mouse
     * 
     * @param e
     */
    Palco.getObj().mouseup(function(e) {
        if (!isPossuiElemento()) {
            return;
        } 
        elemento.mouseup(e.offsetX, e.offsetY);
        renderPalco();
    });
    /**
     * Adiciona evento de mouse move
     * 
     * @param e
     */
    Palco.getObj().mousemove(function(e) {
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


