/**
 * Renderiza os objetos
 *
 * @param {type} context
 * @returns {undefined}
 */
function render(context) {
    for (i = 0; i < level.objects.length; i++) {
//        renderObject(context, level.objects[i]);
        for (var s = level.objects[i].bodyRef.GetShapeList(); s != null; s = s.GetNext()) {
            drawShape(s, context);
        }
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
    context.fillStyle = object.color;
    context.strokeStyle = object.borderColor;
    context.lineWidth = object.borderWidth;

    // Inicializa as propriedades do objeto
    var pos = {x: object.x, y: object.y};
    // Se existe um corpo Box2D vinculado
    if(object.bodyRef !== undefined) {
        pos = object.bodyRef.m_position;
    }

    context.beginPath();
    switch (object.shape) {
        case 'ball':
            var r = object.radius;

            var segments = r + 5;
            var theta = 0.0;
            var dtheta = 2.0 * Math.PI / segments;
            // draw circle
            context.moveTo(pos.x + r, pos.y);
            for (var i = 0; i < segments; i++) {
                var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
                var v = b2Math.AddVV(pos, d);
                context.lineTo(v.x, v.y);
                theta += dtheta;
            }
            context.lineTo(pos.x + r, pos.y);
            break;
        case 'rect':
            // Inicializa as propriedades do objeto
            var width = object.width;
            var height = object.height;

            var w = width / 2;
            var h = height / 2;

            // draw circle
            context.moveTo(pos.x - w, pos.y - h);

            context.lineTo(pos.x + w, pos.y - h);
            context.lineTo(pos.x + w, pos.y + h);
            context.lineTo(pos.x - w, pos.y + h);
            context.lineTo(pos.x - w, pos.y - h);


            break;
        case 'shape':
            // Inicializa as propriedades do objeto
            var width = object.width;
            var height = object.height;
            // draw circle
            context.moveTo(pos.x, pos.y);

//            var w =

            context.lineTo(pos.x + width, pos.y);
            context.lineTo(pos.x + width, pos.y + height);
            context.lineTo(pos.x, pos.y + height);
            context.lineTo(pos.x, pos.y);


            break;
    }

    context.fill();
    context.stroke();

    context.restore();
}


function drawShape(shape, context) {
    context.fillStyle = shape.m_userData.color;
    context.strokeStyle = shape.m_userData.borderColor;
    context.lineWidth = shape.m_userData.borderWidth;

    context.beginPath();
    switch (shape.m_type) {
        case b2Shape.e_circleShape:
            {
                var circle = shape;
                var pos = circle.m_position;
                var r = circle.m_radius;
                var segments = r + 5;
                var theta = 0.0;
                var dtheta = 2.0 * Math.PI / segments;
                // draw circle
                context.moveTo(pos.x + r, pos.y);
                for (var i = 0; i < segments; i++) {
                    var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
                    var v = b2Math.AddVV(pos, d);
                    context.lineTo(v.x, v.y);
                    theta += dtheta;
                }
                context.lineTo(pos.x + r, pos.y);

                // draw radius
                context.moveTo(pos.x, pos.y);
                var ax = circle.m_R.col1;
                var pos2 = new b2Vec2(pos.x + r * ax.x, pos.y + r * ax.y);
                context.lineTo(pos2.x, pos2.y);
            }
            break;
        case b2Shape.e_polyShape:
            {
                var poly = shape;
                var tV = b2Math.AddVV(poly.m_position, b2Math.b2MulMV(poly.m_R, poly.m_vertices[0]));
                context.moveTo(tV.x, tV.y);
                for (var i = 0; i < poly.m_vertexCount; i++) {
                    var v = b2Math.AddVV(poly.m_position, b2Math.b2MulMV(poly.m_R, poly.m_vertices[i]));
                    context.lineTo(v.x, v.y);
                }
                context.lineTo(tV.x, tV.y);
            }
            break;
    }
    context.fill();
    context.stroke();
}

