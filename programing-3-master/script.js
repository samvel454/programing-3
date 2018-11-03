

var matrix = [];
var n = 20;
var side = 20;
//xot
var grrasArr = [];
//xotaker
var grasseat = [];
//msaker
var meateater = [];
//vorsord
var hunter = [];
var mine = [];






// var matrix = [
//     [2, 0, 0, 0, 2],
//     [2, 2, 0, 2, 0],
//     [1, 0, 5, 1, 0],
//     [3, 2, 1, 3, 0],
//     [2, 1, 1, 1, 3]
// ];


function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            var k = random([ 0, 3, 2, 2, 2, 0, 0, 0,0,0, 1, 1, 1, 3, 2, 2]);
            matrix[y][x] = k;
        }
    }
    for(var i = 0; i< 20; i++){
        var y =  Math.floor(random(n));
        var x =  Math.floor(random(n));
        matrix[y][x]=4;
    }
    
    for(var i = 0; i< 5; i++){
        var y =  Math.floor(random(n));
        var x =  Math.floor(random(n));
        matrix[y][x]=5;
    }




    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    //xot
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grrasArr.push(new Grass(x, y));

            }
        }

    }

    //xotaker
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                grasseat.push(new Grasseater(x, y));

            }
        }

    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                meateater.push(new Meateater(x, y));

            }
        }

    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                hunter.push(new Hunter(x, y));

            }
        }

    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                mine.push(new Mine(x, y));

            }
        }

    }


}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            //.xot
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }

            //xotaker
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
               rect(x * side, y * side, side, side);
            }
        }
    }
    //xot
    for (var i in grrasArr) {
        grrasArr[i].mul();
    }


    for (var i in grasseat) {
        grasseat[i].eat();
    }

    for (var i in meateater) {
        meateater[i].eat();
    }
    for (var i in hunter) {
        hunter[i].kil();
    }
    for (var i in mine) {
        mine[i].kil();
    }


}



//hishi grrasArr gri ayspes