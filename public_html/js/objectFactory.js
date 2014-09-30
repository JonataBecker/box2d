
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
 * @param {Level} level
 */
function createObject(world, object, level) {
    // Avalia o tipo do objeto
    switch (object.shape) {
        case 'rect':
            createRect(world, object);
            break;
        case 'ball':
            createBall(world, object);
            break;
        case 'poly':
            createPoly(world, object);
            break;
        case 'capsule':
            createCapsule(world, object);
            break;
        case 'hinge':
            createHingeJoint(world, object, level);
            break;
        case 'player':
            createPlayer(world, object, level);
            break;
    }
}

/**
 * Cria o jogador
 * 
 * @param {b2World} world
 * @param {type} object
 * @param {Level} level
 */
function createPlayer(world, object, level) {
    
    // Tamanhos
    var bodySize = 50;
    var upperLegSize = 50;
    var lowerLegSize = 50;
    var upperArmSize = 30;
    var lowerArmSize = 30;
    var headSize = 25;
    
    level.pushObject({
            id: 9991,
            shape: "capsule",
            x: object.x,
            y: object.y,
            width: 25,
            height: lowerLegSize,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 9992,
            shape: "capsule",
            x: object.x,
            y: object.y - 50,
            width: 25,
            height: upperLegSize,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 9993,
            shape: "hinge",
            x: object.x,
            y: object.y - 25,
            object1: 9991,
            object2: 9992,
    });

    level.pushObject({
            id: 9994,
            shape: "capsule",
            x: object.x,
            y: object.y,
            width: 25,
            height: lowerLegSize,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 9995,
            shape: "capsule",
            x: object.x,
            y: object.y - 50,
            width: 25,
            height: upperLegSize,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 9996,
            shape: "hinge",
            x: object.x,
            y: object.y - 25,
            object1: 9994,
            object2: 9995,
    });
    
    level.pushObject({
            id: 9997,
            shape: "capsule",
            x: object.x,
            y: object.y - 100,
            width: 25,
            height: bodySize,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });


    level.pushObject({
            id: 9998,
            shape: "hinge",
            x: object.x,
            y: object.y - 75,
            object1: 9992,
            object2: 9997,
    });

    level.pushObject({
            id: 9999,
            shape: "hinge",
            x: object.x,
            y: object.y - 75,
            object1: 9995,
            object2: 9997,
    });

    level.pushObject({
            id: 10000,
            shape: "capsule",
            x: object.x - upperArmSize / 2,
            y: object.y - 125,
            width: 25,
            height: upperArmSize,
            rotation: 90,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 10001,
            shape: "hinge",
            x: object.x,
            y: object.y - 125,
            object1: 10000,
            object2: 9997,
    });
    
    level.pushObject({
            id: 10002,
            shape: "capsule",
            x: object.x - upperArmSize - lowerArmSize / 2,
            y: object.y - 125,
            width: 25,
            height: lowerArmSize,
            rotation: 90,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 10003,
            shape: "hinge",
            x: object.x - upperArmSize,
            y: object.y - 125,
            object1: 10000,
            object2: 10002,
    });

    level.pushObject({
            id: 10004,
            shape: "capsule",
            x: object.x + upperArmSize / 2,
            y: object.y - 125,
            width: 25,
            height: upperArmSize,
            rotation: 90,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 10005,
            shape: "hinge",
            x: object.x,
            y: object.y - 125,
            object1: 10004,
            object2: 9997,
    });
    
    level.pushObject({
            id: 10006,
            shape: "capsule",
            x: object.x + upperArmSize + lowerArmSize / 2,
            y: object.y - 125,
            width: 25,
            height: lowerArmSize,
            rotation: 90,
            radius: 25,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });

    level.pushObject({
            id: 10007,
            shape: "hinge",
            x: object.x + upperArmSize,
            y: object.y - 125,
            object1: 10004,
            object2: 10006,
    });
    
    level.pushObject({
            id: 10008,
            shape: "ball",
            x: object.x,
            y: object.y - 150,
            radius: headSize,
            static: false,
            color: "#FFFFFF",
            borderColor: "#DDDDDD"
    });
    
    level.pushObject({
            id: 10009,
            shape: "hinge",
            x: object.x,
            y: object.y - 150,
            object1: 10008,
            object2: 9997,
    });    
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
    ballBd.rotation = angleToRad(object.rotation);
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

    ballBd.rotation = angleToRad(object.rotation);
    ballBd.position.Set(object.x, object.y);
    object.bodyRef = world.CreateBody(ballBd);
};

/**
 * Cria uma bola
 *
 * @param {type} world
 * @param {type} object
 */
function createPoly(world, object) {
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
    polyBd.rotation = angleToRad(object.rotation);
    polyBd.position.Set(object.x, object.y);
    object.bodyRef = world.CreateBody(polyBd);
};

/**
 * Cria uma cápsula
 *
 * @param {type} world
 * @param {type} object
 */
function createCapsule(world, object) {
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

    var ballSd = new b2CircleDef();
    if (!object.static)
        ballSd.density = 1.0;
    ballSd.radius = object.width / 2;
    ballSd.restitution = 0.2;
    ballSd.userData = object;
    ballSd.localPosition.Set(0, - object.height / 2);
    
    ballBd.AddShape(ballSd);

    var ballSd2 = new b2CircleDef();
    if (!object.static)
        ballSd2.density = 1.0;
    ballSd2.radius = object.width / 2;
    ballSd2.restitution = 0.2;
    ballSd2.userData = object;
    ballSd2.localPosition.Set(0, object.height / 2);
    
    ballBd.AddShape(ballSd2);

    ballBd.rotation = angleToRad(object.rotation);
    ballBd.position.Set(object.x, object.y);
    
    object.bodyRef = world.CreateBody(ballBd);
};

/**
 * Cria uma junção rotatória
 * 
 * @param {type} world
 * @param {type} object
 * @param {Level} level
 */
function createHingeJoint(world, object, level) {

    var body1 = getBodyById(world, level, object.object1);
    var body2 = getBodyById(world, level, object.object2);

    var jointDef = new b2RevoluteJointDef();
    jointDef.body1 = body1;
    jointDef.body2 = body2;
    jointDef.anchorPoint.Set(object.x, object.y);
    object.bodyRef = world.CreateJoint(jointDef);

};

function getBodyById(world, level, id) {
    var object = level.getObjectById(id);
    if(object === undefined) {
        return world.GetGroundBody();
    } else {
        return object.bodyRef;
    }
}