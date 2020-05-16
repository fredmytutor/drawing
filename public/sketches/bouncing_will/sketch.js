let balls = [];
let will;

function preload() {
  will = loadImage('images/Will_circle.png');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i<5; i++)
  balls.push(new Ball(random(55,windowWidth-55), random(55,windowHeight-55), random(-2, 2), random(-2, 2), random(50, 100), [random(0, 250), random(0, 250), random(0, 250)]))
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
      balls[i].bounceOff()
    }

  }
}

function mousePressed() {

  let ballClicked = false;
  for (let i = balls.length - 1; i >= 0; i--) {
    if (balls[i].clicked(mouseX, mouseY)) {
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
    // fill(this.colour)
    image(will,this.locx,this.locy,this.size,this.size)
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
  bounceOff() {
    this.speedx = - this.speedx;
    this.speedy = -this.speedy
    this.colour = [random(0, 250), random(0, 250), random(0, 250)]
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
