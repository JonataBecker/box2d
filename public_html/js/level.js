/**
 * Bean para as fases
 */
var Level = function() {
    var level = {};
    level.objects = [];
    // Objeto com propriedades default
    var defaultObject = {
        rotation : 0,
        static: false,
        color: '#AABBFF',
        borderColor: '#88A0FF',
        borderWidth: 1,
        groupIndex: 0
    };
    // Carrega a fase
    level.loadFrom = function(url) {
        jQuery.ajax({
            url: url,
            async: false,
            dataType: 'json',
            success: function(response) {
                for(var i = 0; i < response.objects.length; i++) {
                    level.pushObject(response.objects[i]);
                }
            }
        });
    };
    
    level.pushObject = function(object) {
        return level.objects.push(merge(defaultObject, object));
    },
    
    // Retorna o objeto à partir do ID
    level.getObjectById = function(id) {
        for(var i = 0; i < level.objects.length; i++) {
            if(level.objects[i].id === id) {
                return level.objects[i];
            }
        }
    }
    
    // Exporta as funções públicas
    return {

        objects: level.objects,
        
        load: function(url) {
            level.loadFrom(url);
        },
        
        getObjectById:function(id) {
            return level.getObjectById(id);
        },
        
        pushObject: function(object) {
            return level.pushObject (object);
        }

        
    };
};
