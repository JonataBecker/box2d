/**
 * Bean para os objetos
 */
var Rectangle = function() {
    
    var rectangle = {};
    /** Largura */
    rectangle.width = 0;
    /** Altura */
    rectangle.height = 0;
    
    /**
     * Verifica se colidiu com o hitbox do objeto
     * 
     * @param {int} rayX
     * @param {int} rayY
     * @returns {boolean}
     */
    rectangle.hitboxHit = function(rayX, rayY) {
        var w = width / 2;
        var h = height / 2;
        return (rayX >= x - w && rayX <= x + w) && (rayY >= y - h && rayY <= y + h);
    };
    
    /**
     * Verifica se colidiu com o hitbox do objeto
     * 
     * @param context Contexto Canvas
     */
    rectangle.render = function(context) {
        // Inicializa as propriedades do objeto
        var w = width / 2;
        var h = height / 2;
        // draw circle
        context.moveTo(- w, - h);
        context.lineTo(+ w, - h);
        context.lineTo(+ w, + h);
        context.lineTo(- w, + h);
        context.lineTo(- w, - h);
    };

    /**
     * Atualiza o objeto em um tick do jogo
     */
    rectangle.tick = function() {
        
    };
    
    /**
     * Cria o corpo físico deste objeto
     * 
     * @param world
     */
    rectangle.buildPhysicsBody = function(world) {
        // Cria a definição do shape
        var boxShapeDef = new b2BoxDef();
        // Se não for estático, define uma densidade
        if (!static) {
            boxShapeDef.density = 1.0;
        }
        // Dimensões
        boxShapeDef.extents.Set(width / 2, height / 2);
        // Configurações físicas
        boxShapeDef.restitution = 0.2;
        boxShapeDef.userData = this;
        boxShapeDef.groupIndex = groupIndex;
        // Cria o body
        var boxBodyDef = new b2BodyDef();
        boxBodyDef.AddShape(boxShapeDef);
        boxBodyDef.position.Set(x, y);
        boxBodyDef.rotation = angleToRad(rotation);
        bodyRef = world.CreateBody(boxBodyDef);
    };
    
    // Prototipação
    return {
        /**
         * Retorna a largura
         * 
         * @returns {Number}
         */
        getWidth: function() {
            return rectangle.width;
        },
        /**
         * Define a largura
         * 
         * @param {Number} width
         */
        setWidth: function(width) {
            rectangle.width = width;
        },
        /**
         * Retorna a altura
         * 
         * @returns {Number}
         */
        getHeight: function() {
            return rectangle.height;
        },
        /**
         * Define a altura
         * 
         * @param {Number} height
         */
        setHeight: function(height) {
            rectangle.width = height;
        }
    };
};
