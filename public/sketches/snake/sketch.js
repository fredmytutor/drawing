let snake;
let food;
let speed = 3.5;
let superSpeed = 5;
let faces = [];
let snakeSize = 50;
let foodSize = 50;
let v = true;

function preload() {
  faces.push(loadImage('images/JB.png'))
  faces.push(loadImage('images/balloons.png'))
  faces.push(loadImage('images/cake.png'))
  faces.push(loadImage('images/present.png'))
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  snake = new Snake(100, 100, 0, speed, snakeSize)
  food = new Food(random(0, windowWidth), random(0, windowHeight), foodSize, 2)
}

function draw() {
  background(250, 0, 100)
  snake.move()
  snake.show()
  snake.crash()
  food.show()
  snake.eat()
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setVelocity(-speed, 0)
  } else if (keyCode === RIGHT_ARROW) {
    snake.setVelocity(speed, 0)
  } else if (keyCode === UP_ARROW) {
    snake.setVelocity(0, -speed)
  } else if (keyCode === DOWN_ARROW) {
    snake.setVelocity(0, speed)
  }
}

class Snake {
  constructor(locx, locy, speedx, speedy, size) {
    
    this.locx = locx;
    this.locy = locy;
    this.speedx = speedx;
    this.speedy = speedy;
    this.size = size;
    this.bodyparts = [];
    this.bodyparts.push(new SnakeBodypart(100, 100, this.size,0))
    this.history = []
  }
  setLocation(x, y) {
    this.locx = x
    this.locy = y
  }
  setVelocity(vx, vy) {
    this.speedx = vx;
    this.speedy = vy;
  }
  show() {
    let v = createVector(this.locx, this.locy)
    this.history.unshift(v);
    for (let i = 0; i < this.bodyparts.length; i++) {
      this.bodyparts[i].show()
    }
  }
  move() {
    this.bodyparts[0].setLocation(this.locx, this.locy)
    for (let i = 1; i < this.bodyparts.length; i++) {
      this.bodyparts[i].setLocation(this.history[15 * i].x, this.history[15 * i].y)
    }
    this.locx += this.speedx
    this.locy += this.speedy
  }
  grow() {
    this.bodyparts.push(new SnakeBodypart(0, 0, this.size,0))

  }
  intersects(otherObject) {
    return (dist(this.bodyparts[0].locx, this.bodyparts[0].locy, otherObject.locx, otherObject.locy) < (this.size / 2 + otherObject.size / 2))
  }
  eat() {
    if (dist(this.bodyparts[0].locx, this.bodyparts[0].locy, food.locx, food.locy) < (this.size / 2 + food.size / 2)) {
      snake.grow()
      food.setLocation(random(10, windowWidth-10), random(10, windowHeight-10))
      food.setFace(int(random(1,4)))
    }
  }
  crash() {
    if (this.bodyparts[0].locx < 0 || this.bodyparts[0].locx > windowWidth || this.bodyparts[0].locy < 0 || this.bodyparts[0].locy > windowHeight) {
      snake.die()
    }
    for (let i = 2; i < this.bodyparts.length; i++) {
      if (snake.intersects(this.bodyparts[i])) {
        snake.die()
      }
    }
  }
  die() {
    this.bodyparts.splice(1, this.bodyparts.length)
    snake.setLocation(random(0, windowWidth), random(0, windowHeight))
  }
}

class SnakeBodypart {
  constructor(locx, locy, size, face) {
    this.locx = locx;
    this.locy = locy;
    this.size = size;
    this.face = face;
  }
  setLocation(x, y) {
    this.locx = x
    this.locy = y
  }
  show() {
    strokeWeight(0);
    imageMode(CENTER);
    image(faces[0], this.locx, this.locy, this.size, this.size)
  }
}

class Food {
  constructor(locx, locy, size, face) {
    this.locx = locx;
    this.locy = locy;
    this.size = size;
    this.face = face;
  }
  setLocation(x, y) {
    this.locx = x
    this.locy = y
  }
  setFace(f) {
    this.face = f
  }
  show() {
    image(faces[this.face], this.locx, this.locy, this.size, this.size)
  }
}