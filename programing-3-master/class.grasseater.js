
class Grasseater extends Base {
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
        var emptyCells = super.chooseCell(1);
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
        var emptyCells = super.chooseCell(0);
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