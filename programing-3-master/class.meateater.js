
class Meateater extends Base {
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
    chooseCell(/* Bayc estex petqa lini charecter bar@*/) {
        this.getNewCoordinates();
        return super.chooseCell();
    }
    move() {


        var emptyCells = super.chooseCell(0);
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
        var emptyCells = super.chooseCell(2);
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
            if (this.energy >= 15) {
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
        var emptyCells = super.chooseCell(0);
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
                meateater.splice(i,1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }

}