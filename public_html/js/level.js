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
        borderWidth: 1
    };
    // Carrega a fase
    level.loadFrom = function(url) {
        jQuery.ajax({
            url: url,
            async: false,
            dataType: 'json',
            success: function(response) {
                for(var i = 0; i < response.objects.length; i++) {
                    level.objects[i] = merge(response.objects[i], defaultObject);
                }
            }
        });
    };
    // Exporta as funções públicas
    return {
        objects: level.objects,
        load: function(url) {
            level.loadFrom(url);
        }
    };
};
