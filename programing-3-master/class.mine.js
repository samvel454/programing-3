
class Mine extends Base {
    constructor(x, y) {
        super(x,y)
        this.multiply = 0;
        this.energy = 8;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        //hishi grrasArr gri ayspes

    }

    chooseCell( charecter ) {
        this.getNewCoordinates();
        return super.chooseCell();
    }

    kil() {
        var cells = super.chooseCell();
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


