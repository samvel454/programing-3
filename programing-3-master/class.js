

//hishi grrasArr gri ayspes
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
    }//hishi grrasArr gri ayspes
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 1) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grrasArr.push(newGrass);
            this.multiply = 0;
        }
    }
    //hishi grrasArr gri ayspes
}




class Grasseater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
    getNewCoordinates() {
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
    }

    chooseCell(character) {
        this.getNewCoordinates();
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



    move() {


        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;
        }
        this.energy--;

        //heto avelacru meeater mej
        if (this.energy <= 0) {
            this.die();
        }

    }
    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            for (var i in grrasArr) {
                if (x == grrasArr[i].x && y == grrasArr[i].y) {
                    grrasArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
            if (this.energy >= 20) {
                this.mul();
                this.energy = 6;

            }

        }
        else {
            this.move();
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newgrasseater = new Grasseater(newX, newY, 1);
            grasseat.push(newgrasseater);
        }
    }
    die() {
        for (var i in grasseat) {
            if (this.x == grasseat[i].x && this.y == grasseat[i].y) {
                grasseat.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }

}

class Meateater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
    getNewCoordinates() {
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
    }
    chooseCell(character) {
        this.getNewCoordinates();
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
    move() {


        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
        }

        console.log(this.energy)
        this.energy++;



    }
    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
            for (var i in grrasArr) {
                if (x == grrasArr[i].x && y == grrasArr[i].y) {
                    grrasArr.splice(i, 1);
                    break;
                }
            this.energy--;
            
            }
            if (this.energy >= 11) {
                this.mul();
                this.energy = 6;



            }

            else if (grasseat.length == 0) {
                this.die();
            }


        }
        else {
            this.move();
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newmeateater = new Meateater(newX, newY, 1);
            meateater.push(newmeateater);
        }
    }
    die() {
        for (var i in meateater) {
            if (this.x == meateater[i].x && this.y == meateater[i].y) {
                meateater.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }

}


class Hunter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
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
    move() {


        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            this.x = newX;
            this.y = newY;
        }
        this.energy--;


    }
    kil() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = 4;
            this.x = x;
            this.y = y;
            for (var i in meateater) {
                if (x == meateater[i].x && y == meateater[i].y) {
                    meateater.splice(i, 3);
                    break;
                }
            }
            this.energy++;



        }
        else {
            this.move();
        }

        if (meateater.length == 0) {
            this.die();
        }

    }
    die() {
        for (var i in hunter) {
            if (this.x == hunter[i].x && this.y == hunter[i].y) {
                hunter.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}

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


