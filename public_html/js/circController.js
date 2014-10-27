/**
 * Controlador de construção de circunferências
 * 
 * @param {Level} level
 */
var CircController = function(level) {
    var obj = this;
    obj.options = null;
    var objLevel = level;
    var isCreate = false;
    
    /**
     * Evento de clique down do mouse
     * 
     * @param {int} posX
     * @param {int} posY
     */
    obj.mousedown = function(posX, posY) {
        obj.options = { shape: 'ball', x : posX, y : posY, radius : 0, static: false, color: '#33FF33', borderColor: '#008000'};
        objLevel.objects.push(obj.options);
        isCreate = true;
    };
    
    /**
     * Evento de cliente up do mouse
     * 
     * @param {int} posX
     * @param {int} posY
     */
    obj.mouseup = function(posX, posY) {
        isCreate = false;
    };
    
    /**
     * Evento de mouse move
     * 
     * @param {int} posX
     * @param {int} posY
     */
    obj.mousemove = function(posX, posY) {
        if (!isCreate) {
            return;
        }
        obj.options.radius = Math.abs(obj.options.x - posX);
    };
};

