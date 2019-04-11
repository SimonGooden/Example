var tilesize = 50;

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

    static createGrid(levelData) {
        let numCols = levelData.size[0];
        let numRows = levelData.size[1];

        for (var r = 0; r < numRows; r++) {

            for (var c = 0; c < numCols; c++) {

                tiles.push(new Tile(c, r));

            }
        }
    }
}
