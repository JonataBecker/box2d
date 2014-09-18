function merge(obj1, obj2) {
    for (var attrname in obj2) { obj1[attrname] = obj2[attrname]; };
    return obj1;
}