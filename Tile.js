var tilesize = 50;
var waitForResize = false;

class Tile {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.color = color(160, 160, 180);
    }

    draw() {
        let x = this.col * tilesize;
        let y = this.row * tilesize;

        fill(160, 160, 180);
        rect(x, y, tilesize, tilesize);

    }

    static getIndex(col, row) {
        var numCols = width / tilesize;

        let index = col + row * numCols
        return index
    }

    static placeFree(col, row) {
        var index = Tile.getIndex(col, row);

        var numCols = width / tilesize;
        var numRows = height / tilesize;

        if (row >= numRows) {
            return false;
        if (row < 0) {
            return false;
        }

    if (tiles[index] instanceof Wall) {
        return false;
    }
    return true;
}

    static createGrid(levelData) {
        let numCols = levelData.size[0];
        let numRows = levelData.size[1];

        waitForResize = true;
        resizeCanvas(numCols * tilesize, numRows * tilesize);
        waitForResize = false;

        for (var r = 0; r < numRows; r++) {

            for (var c = 0; c < numCols; c++) {
                var index = Tile.getIndex(c, r);

                if (levelData.tiles[index] === 0) {
                    tiles.push(new Tile(c, r));
                }  else if (levelData.tiles[index] === 1) {
                      tiles.push(new Wall(c, r));
                }
            }
        }
    }
}
