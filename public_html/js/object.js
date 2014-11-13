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
    /** Referência ao corpo físico do objeto */
    object.bodyRef = null;
    
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

    /**
     * Atualiza o objeto em um tick do jogo
     */
    object.tick = function() {
        
    };
    
    /**
     * Cria o corpo físico deste objeto
     * 
     * @param world
     */
    object.buildPhysicsBody = function(world) {
        var boxSd = new b2BoxDef();
        if (!object.static)
            boxSd.density = 1.0;
        boxSd.extents.Set(object.width / 2, object.height / 2);
        boxSd.restitution = 0.2;
        boxSd.userData = object;
        boxSd.groupIndex = object.groupIndex;

        var ballBd = new b2BodyDef();
        ballBd.AddShape(boxSd);

        ballBd.position.Set(object.x, object.y);
        ballBd.rotation = angleToRad(object.rotation);
        object.bodyRef = world.CreateBody(ballBd);
    };
    
    // Prototipação
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
         * Atualiza o objeto em um tick do jogo
         */
        tick: function() {
            object.tick();
        },
        /**
         * Cria o corpo físico deste objeto
         * 
         * @param world
         */
        buildPhysicsBody: function(world) {
            object.buildPhysicsBody(world);
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
        },
        /**
         * Retorna a referência do corpo físico
         */
        getBodyRef: function() {
            return object.bodyRef;
        },
        /**
         * Define a referência do corpo físico
         * 
         * @param bodyRef
         */
        setBodyRef: function(bodyRef) {
            object.bodyRef = bodyRef;
        }        
    };
};
