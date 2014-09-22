/**
 * Renderiza os objetos
 *
 * @param {type} context
 * @returns {undefined}
 */
function render(context) {
    for (i = 0; i < level.objects.length; i++) {
        renderObject(context, level.objects[i]);
    }
}

/**
 * Renderiza um objeto
 *
 * @param {type} context
 * @param {type} object
 * @returns {undefined}
 */
function renderObject(context, object) {
    // Inicializa as propriedades do objeto
    var pos = {x: object.x, y: object.y};
    var rot = object.rotation;
    // Se existe um corpo Box2D vinculado
    if(object.bodyRef !== undefined) {
        pos = object.bodyRef.m_position;
        rot = object.bodyRef.m_rotation;
    }

    context.fillStyle = object.color;
    context.strokeStyle = object.borderColor;
    context.lineWidth = object.borderWidth;

    context.save();
    // Translaciona
    context.translate(pos.x, pos.y);
    // Rotaciona
    context.rotate(rot);

    context.beginPath();
    switch (object.shape) {
        case 'ball':
            var r = object.radius;
            var segments = r + 5;
            var theta = 0.0;
            var dtheta = 2.0 * Math.PI / segments;
            // draw circle
            context.moveTo(r, 0);
            for (var i = 0; i < segments; i++) {
                var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
                context.lineTo(d.x, d.y);
                theta += dtheta;
            }
            context.lineTo(r, 0);
            break;
        case 'rect':
            // Inicializa as propriedades do objeto
            var width = object.width;
            var height = object.height;
            var w = width / 2;
            var h = height / 2;
            // draw circle
            context.moveTo(- w, - h);
            context.lineTo(+ w, - h);
            context.lineTo(+ w, + h);
            context.lineTo(- w, + h);
            context.lineTo(- w, - h);
            break;
        case 'poly':
            center = centerPoint(object.points);
            // Primeiro ponto
            context.moveTo(object.points[0][0] - center[0], object.points[0][1] - center[1]);
            for(i = object.points.length - 1; i >= 0; i--) {
                context.lineTo(object.points[i][0] - center[0], object.points[i][1] - center[1]);
            }
            break;
    }

    context.fill();
    context.stroke();

    context.restore();
}
