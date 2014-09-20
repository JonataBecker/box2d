var level = {
    objects : [
        {
            shape: 'rect',
            x : 400,
            y : 595,
            width : 800,
            height : 10,
            static: true,
        },
        {
            shape: 'rect',
            x : 5,
            y : 300,
            width : 10,
            height : 600,
            static: true,
        },
        {
            shape: 'rect',
            x : 795,
            y : 300,
            width : 10,
            height : 600,
            static: true,
        },
        { shape: 'ball', x : 401, y : 200, radius : 25, static: false, color: '#33FF33', borderColor: '#008000'},
        { shape: 'ball', x : 100, y : 200, radius : 25, static: false, color: '#33FF33', borderColor: '#008000'},
        { shape: 'ball', x : 301, y : 300, radius : 25, static: false, color: '#33FF33', borderColor: '#008000'},
        { shape: 'rect', x : 300, y : 100, rotation : 45, width : 50, height : 50, static: false, color: '#FFFF33', },
        { shape: 'rect', x : 300, y : 200, width : 50, height : 50, static: false, color: '#FFFF33', },
        { shape: 'poly', x : 200, y : 200, points : [[25, 0],[50, 50], [0, 50]], static: false, color: '#3333FF', },
    ],
};
