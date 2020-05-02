let balls = [];
// let ball1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(130, 0, 130);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
    balls[i].bounce();
    let overlapping = false;
    for (let j = 0; j < balls.length; j++) {
      if (balls[i] !== balls[j] && balls[i].intersects(balls[j])) {
        overlapping = true;
      }
    }
    if (overlapping) {
      balls[i].setColour(0,0,0)
    }

  }
}

function mousePressed() {

  let ballClicked = false;
  for (let i = balls.length - 1; i >= 0; i--) {
    if (balls[i].clicked(mouseX, mouseY)) {
      // delete ball and create 2 new balls

      ballClicked = true;
      for (let x = 0; x < 5; x++) {
        balls.push(new Ball(balls[i].currentLocationX(), balls[i].currentLocationY(), random(-2, 2), random(-2, 2), random(20, 40), 250))
      }
      balls.splice(i, 1)
    }
  }
  if (!ballClicked) {
    balls.push(new Ball(mouseX, mouseY, random(-2, 2), random(-2, 2), random(50, 100), [random(0, 250), random(0, 250), random(0, 250)]))
  }
}

class Ball {
  constructor(locx, locy, speedx, speedy, size, colour) {
    this.locx = locx;
    this.locy = locy;
    this.speedx = speedx;
    this.speedy = speedy;
    this.size = size;
    this.colour = colour;
  }
  currentLocationX() {
    return this.locx
  }
  currentLocationY() {
    return this.locy
  }
  setVelocity(vx, vy) {
    this.speedx = vx
    this.speedy = vy
  }
  setSize(d) {
    this.size = d;
  }
  setColour(rgb) {
    this.colour = rgb;
  }
  show() {
    fill(this.colour)
    ellipse(this.locx, this.locy, this.size, this.size);
  }
  move() {
    this.speedx, this.speedy
    this.locx += this.speedx;
    this.locy += this.speedy;
    this.speedx += 0;
    this.speedy += 0;
    this.locx = constrain(this.locx, 0, windowWidth - this.size / 2);
    this.locy = constrain(this.locy, 0, windowHeight - this.size / 2);
  }
  bounce() {
    if (this.locx + this.size / 2 >= windowWidth || this.locx < this.size / 2) {
      this.speedx = - this.speedx;
      this.colour = [random(0, 250), random(0, 250), random(0, 250)]
    }
    if (this.locy + this.size / 2 >= windowHeight || this.locy < this.size / 2) {
      this.speedy = -this.speedy
      this.colour = [random(0, 250), random(0, 250), random(0, 250)]
    }
  }
  clicked(x, y) {
    if (dist(this.locx, this.locy, x, y) < this.size) {
      return true
    }
  }
  intersects(otherObject) {
    return (dist(this.locx, this.locy, otherObject.locx, otherObject.locy) < (this.size/2 + otherObject.size/2))
  }
}
