
class Base
 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        
       
        //hishi grrasArr gri ayspes

    }
    
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
 }
 //arel em menak xot@