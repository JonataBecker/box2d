function merge(obj1, obj2) {
    var newObj = {};
    for (var attrname in obj1) { newObj[attrname] = obj1[attrname]; };
    for (var attrname in obj2) { newObj[attrname] = obj2[attrname]; };
    return newObj;
}