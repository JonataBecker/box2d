function createWorld() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(-1000, -1000);
	worldAABB.maxVertex.Set(1000, 1000);
	var gravity = new b2Vec2(0, 300);
	var doSleep = true;
	var world = new b2World(worldAABB, gravity, doSleep);
	return world;
}

function createRect(world, x, y, width, height, fixed, object) {
    return createPoly(world, x, y, [[0, 0], [width, 0], [width, height], [0, height]], fixed, object);
}

function createPoly(world, x, y, points, fixed, object) {
	var polySd = new b2PolyDef();
	if (!fixed) polySd.density = 1.0;
        polySd.restitution = 0.2;
	polySd.vertexCount = points.length;
        polySd.userData = object;
	for (var i = 0; i < points.length; i++) {
		polySd.vertices[i].Set(points[i][0], points[i][1]);
	}
        
        
	var polyBd = new b2BodyDef();
	polyBd.AddShape(polySd);
	polyBd.position.Set(x,y);
        object.bodyRef = world.CreateBody(polyBd);
        console.log(object);
};

function createBall(world, x, y, rad, fixed) {
	var ballSd = new b2CircleDef();
	if (!fixed) ballSd.density = 1.0;
	ballSd.radius = rad || 10;
	ballSd.restitution = 0.2;
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	return world.CreateBody(ballBd);
};