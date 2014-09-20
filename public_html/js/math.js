/**
 * Retorna ponto central de uma sequência de pontos
 * @param {type} pointArray
 * @returns {undefined}
 */
function centerPoint(pointArray) {
    
    smx = 0;
    smy = 0;
    console.log('y');
    //return;
    for (i = 0; i < pointArray.length; i++) {
        console.log(i);
        smx += pointArray[i][0];
        smy += pointArray[i][1];
        break;
    }
    console.log('x');
    return;
    smx /= pointArray.length;
    smy /= pointArray.length;
    return [smx, smy];
}