/**
 * Bean para os objetos
 */
var Object = function() {
    
    var object = {};
    /** Posição horizontal */
    object.x = 0;
    /** Posição vertical */
    object.y = 0;
    /** Rotação (Angulos) */
    object.rotation = 0;
    /** Objeto é estático */
    object.static = false;
    /** Grupo de colisão */
    object.groupIndex = 0;
    /** Cor do objeto */
    object.color = '#AABBFF';
    /** Corda borda */
    object.borderColor = '#88A0FF';
    /** Largura da borda */
    object.borderWidth = 1;
    
    /**
     * Verifica se colidiu com o hitbox do objeto
     * 
     * @param {int} rayX
     * @param {int} rayY
     * @returns {boolean}
     */
    object.hitboxHit = function(rayX, rayY) {
        
    };
    
    /**
     * Verifica se colidiu com o hitbox do objeto
     * 
     * @param context Contexto Canvas
     */
    object.render = function(context) {
        
    };
    
    // Protótipação
    return {
        /**
         * Verifica se colidiu com o hitbox do objeto
         * 
         * @param {int} rayX
         * @param {int} rayY
         * @returns {boolean}
         */
        hitboxHit: function(rayX, rayY) {
            return object.hitboxHit(rayX, rayY);
        },
        /**
         * Verifica se colidiu com o hitbox do objeto
         * 
         * @param context Contexto Canvas
         */
        render: function(context) {
            object.context(context);
        },
        /**
         * Posição horizontal
         */
        getX: function() {
            return object.x;
        },
        /**
         * Posição horizontal
         * 
         * @param x
         */
        setX: function(x) {
            object.x = x;
        },
        /**
         * Posição vertical
         */
        getY: function() {
            return object.y;
        },
        /**
         * Posição vertical
         * 
         * @param y
         */
        setY: function(y) {
            object.y = y;
        },
        /**
         * Rotação (Angulos)
         */
        getRotation: function() {
            return object.rotation;
        },
        /**
         * Rotação (Angulos)
         * 
         * @param rotation
         */
        setRotation: function(rotation) {
            object.rotation = rotation;
        },
        /**
         * Objeto é estático
         */
        getStatic: function() {
            return object.static;
        },
        /**
         * Objeto é estático
         * 
         * @param static
         */
        setStatic: function(static) {
            object.static = static;
        },
        /**
         * Grupo de colisão
         */
        getGroupIndex: function() {
            return object.groupIndex;
        },
        /**
         * Grupo de colisão
         * 
         * @param groupIndex
         */
        setGroupIndex: function(groupIndex) {
            object.groupIndex = groupIndex;
        },
        /**
         * Cor do objeto
         */
        getColor: function() {
            return object.color;
        },
        /**
         * Cor do objeto
         * 
         * @param color
         */
        setColor: function(color) {
            object.color = color;
        },
        /**
         * Corda borda
         */
        getBorderColor: function() {
            return object.borderColor;
        },
        /**
         * Corda borda
         * 
         * @param borderColor
         */
        setBorderColor: function(borderColor) {
            object.borderColor = borderColor;
        }
    };
};
