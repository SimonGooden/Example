var tilesize = 50;
var waitForResize = false;

class Tile {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    draw() {
        let x = this.col * tilesize;
        let y = this.row * tilesize;

        fill(160, 160, 180);
        rect(x, y, tilesize, tilesize);

    }

    static getIndex(col, numRows) {
        var numCols = width / tilesize;

        let index = numCols + numRows * numCols
        return index
    }

    static createGrid(levelData) {
        let numCols = levelData.size[0];
        let numRows = levelData.size[1];

        waitForResize = true;
        resizeCanvas(numCols * tilesize, numRows * tilesize);
        waitForResize = false;

        for (var r = 0; r < numRows; r++) {

            for (var c = 0; c < numCols; c++) {

                tiles.push(new Tile(c, r));

            }
        }
    }
}
