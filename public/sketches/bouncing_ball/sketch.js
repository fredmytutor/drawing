let colour = {
  r: 0,
  g: 0,
  b: 250
};
let ball1;
let ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() { 
  ball1 = new Ball ()
  //Don't let the ball go beyond the boundaries
  locx = constrain(locx, 0, windowWidth - d / 2)
  locy = constrain(locy, 0, windowHeight - d / 2)
  // //call functions
  move();
  bounce();

};

class Ball {
  constructor(locx, locy, speedx, speedy, accy, d, e, on) {
    this.locx = locx;
    this.locy = locy;
    this.speedx = speedx;
    this.speedy = speedy;
    this.accy = accy;
    this.d = d;
    this.e = e;
    this.on = on;

  }
  //bounce the ball off the walls and loose some energy every bounce
  bounce() {
    if (locx + d / 2 >= windowWidth) {
      speedx = - speedx;
    }
    if (locy + d / 2 >= windowHeight) {
      speedy = - speedy + e;
    }
  };
  // Move the ball by the speed amount
  move() {
    if (on == true) {
      ellipse(locx, locy, d, d);
      locx += speedx;
      locy += speedy;
      speedx += 0;
      speedy += acc;

    }
  }
  // I want to drop the ball from where the mouse is clicked
  mousePressed() {
    on = true
    locx = mouseX;
    locy = mouseY;
    speedx = 2;
    speedy = 2;
  };

};



