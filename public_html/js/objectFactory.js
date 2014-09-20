
/**
 * Cria um mundo Box2D
 *
 * @returns {b2World}
 */
function createWorld() {
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    var gravity = new b2Vec2(0, 300);
    var doSleep = false;
    var world = new b2World(worldAABB, gravity, doSleep);
    return world;
}

/**
 * Cria o objeto
 *
 * @param {b2World} world
 * @param {type} object
 */
function createObject(world, object) {
    // Avalia o tipo do objeto
    switch (object.shape) {

        case 'shape':
            createPlayer(world, object);
            break;

        case 'rect':
            createRect(world, object);
            break;
        case 'ball':
            createBall(world, object);
            break;
        case 'poly':
            createPolygon(world, object);
            break;
    }
}

/**
 * Cria um retângulo
 *
 * @param {type} world
 * @param {type} object
 */
function createRect(world, object) {

    var boxSd = new b2BoxDef();
    if (!object.static)
        boxSd.density = 1.0;
    boxSd.extents.Set(object.width / 2, object.height / 2);
    boxSd.restitution = 0.2;
    boxSd.userData = object;

    var ballBd = new b2BodyDef();
    ballBd.AddShape(boxSd);

    ballBd.position.Set(object.x, object.y);
    ballBd.rotation = object.rotation;
    object.bodyRef = world.CreateBody(ballBd);
}
    
/**
 * Cria uma bola
 *
 * @param {type} world
 * @param {type} object
 */
function createBall(world, object) {
    var ballSd = new b2CircleDef();
    if (!object.static)
        ballSd.density = 1.0;
    ballSd.radius = object.radius || 10;
    ballSd.restitution = 0.2;
    ballSd.userData = object;
    var ballBd = new b2BodyDef();
    ballBd.AddShape(ballSd);

    ballBd.rotation = object.rotation;
    ballBd.position.Set(object.x, object.y);
    object.bodyRef = world.CreateBody(ballBd);
};

/**
 * Cria uma bola
 *
 * @param {type} world
 * @param {type} object
 */
function createPolygon(world, object) {
    var polySd = new b2PolyDef();
    if (!object.static)
        polySd.density = 1.0;
    polySd.restitution = 0.2;
    polySd.vertexCount = object.points.length;
    polySd.userData = object;
    for (var i = 0; i < object.points.length; i++) {
        polySd.vertices[i].Set(object.points[i][0], object.points[i][1]);
    }


    var polyBd = new b2BodyDef();
    polyBd.AddShape(polySd);
    polyBd.rotation = object.rotation;
    polyBd.position.Set(object.x, object.y);
    object.bodyRef = world.CreateBody(polyBd);
}
;

/**
 * Cria um polígono
 *
 * @param {type} world
 * @param {type} x
 * @param {type} y
 * @param {type} points
 * @param {type} fixed
 * @param {type} object
 * @returns {undefined}
 */
function createPoly(world, x, y, points, fixed, object) {
    var polySd = new b2PolyDef();
    if (!fixed)
        polySd.density = 1.0;
    polySd.restitution = 0.2;
    polySd.vertexCount = points.length;
    polySd.userData = object;
    for (var i = 0; i < points.length; i++) {
        polySd.vertices[i].Set(points[i][0], points[i][1]);
    }


    var polyBd = new b2BodyDef();
    polyBd.AddShape(polySd);
    ballBd.rotation = object.rotation;
    polyBd.position.Set(x, y);
    object.bodyRef = world.CreateBody(polyBd);
}
;