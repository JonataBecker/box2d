/**
 * Retorna ponto central de uma sequência de pontos
 * 
 * @param {type} pointArray
 * @returns Ponto central
 */
function centerPoint(pointArray) {
    smx = 0;
    smy = 0;
    for (var i = 0; i < pointArray.length; i++) {
        smx += pointArray[i][0];
        smy += pointArray[i][1];
    }
    smx /= pointArray.length;
    smy /= pointArray.length;
    return [smx, smy];
}