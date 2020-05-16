let x = 0;
let y= 0 ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(220,100,0);
  translate(x,y)
  rotate(10*(1+y))
  x = x + 2
  y++
  rect(0,0,200,100)
}   