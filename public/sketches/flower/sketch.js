let ball1;
let ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new ball();
  ball2 = new ball();
};


function draw() {
 background(205,0,250);
 ball1.move();
 ball1.show();
 ball2.move();
 ball2.show();

};

class ball {
  constructor() {
    this.x = 500;
    this.y = 250;
  }
  move() {
    this.x = this.x + random(-2, 2)
    this.y = this.y + random(-2, 2)
  }
  show() {
    ellipse(this.x,this.y,24,24)
}
};

