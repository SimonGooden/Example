var level = {
  size: [5, 6],
  tiles: [
    0, 0, 0, 0, 0,
    0, 1, 0, 1, 0,
    0, 1, 0, 1, 0,
    0, 0, 0, 0, 0,
    1, 0, 0, 0, 1,
    1, 1, 1, 1, 1
  ]
}

var tiles = [];

function setup() {
     createCanvas(500,500);

     Tile.createGrid(level);
  }
function draw() {
    if (waitForResize) {return;}

    background(200);

    for(var tile of tiles) {
        tile.draw();
    }
}
