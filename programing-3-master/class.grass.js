class Grass extends Base {
    constructor(x, y) {
      super(x,y)
      this.multiply = 0 ;
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
    // chooseCell() {
    //      return super.chooseCell();
    // }//hishi grrasArr gri ayspes
    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
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