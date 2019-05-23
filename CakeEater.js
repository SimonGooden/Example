class CakeEater {
  constructor(x, y) {
      this.x = x;
      this.y = y;


      this.xvel = 0;
      this.yvel = 0;
  }


  draw() {
      fill(100, 100, 200);
      rect(this.x, this.y, tilesize, tilesize);
  }

  move() {

  }

  update() {
    this.move();
    this.draw();
  }
}
