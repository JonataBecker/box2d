/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var CircController = function(level) {
    var obj = this;
    var objLevel = level;

    obj.options = null;

    var isCreate = false;


    obj.mousedown = function(posX, posY) {
        obj.options = { shape: 'ball', x : posX, y : posY, radius : 0, static: false, color: '#33FF33', borderColor: '#008000'};
        objLevel.objects.push(obj.options);
        isCreate = true;
    };

    obj.mouseup = function(posX, posY) {
        isCreate = false;
    };


    obj.mousemove = function(posX, posY) {
        if (!isCreate) {
            return;
        }
         console.log(posX)
        obj.options.radius = Math.abs(obj.options.x - posX);
        
       
    };


};

