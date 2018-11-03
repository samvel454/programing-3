
class Mine {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 8;
        // this.directions = [
        //     [this.x - 1, this.y - 1],
        //     [this.x, this.y - 1],
        //     [this.x + 1, this.y - 1],
        //     [this.x - 1, this.y],
        //     [this.x + 1, this.y],
        //     [this.x - 1, this.y + 1],
        //     [this.x, this.y + 1],
        //     [this.x + 1, this.y + 1]
        // ];
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    kil() {
        var cells = this.chooseCell();
        for(var i in cells){
            var x = cells[i][0];
            var y = cells[i][1];
          
            if(matrix[y][x] == 3){
                matrix[y][x] = 0;
                this.x = x;
                this.y = y;
                for(var i in meateater){
                    if (x == meateater[i].x && y == meateater[i].y) {
                        meateater.splice(i, 1);
                        break;
                    }
                    
                }
            }
            else if(matrix[y][x] == 2){
                matrix[y][x] = 0;
                this.x = x;
                this.y = y;
                for(var i in grasseat){
                    if (x ==grasseat[i].x && y == grasseat[i].y) {
                        grasseat.splice(i, 1);
                        break;
                    }
                }
               
            }
            else if(matrix[y][x] == 1){

                matrix[y][x] = 0;
                this.x = x;
                this.y = y;
                for(var i in grrasArr){
                    if (x ==grrasArr[i].x && y ==grrasArr[i].y) {
                        grrasArr.splice(i, 1);
                        break;
                    }
                }
                
            }
         
        }
       
    }
    
   
  
}


