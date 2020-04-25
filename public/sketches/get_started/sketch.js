var r = 0;
var b = 0;
var h = 80;
var w = 80;
function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
  //vary the colour of the background by mouse location
  r = map(mouseX,0,windowWidth,0,250)
  g = 250 - map(mouseY,0,windowHeight,0,250);
  b = map(mouseY,0,windowHeight,0,250)
  background(r,0,b);

  ellipseMode(CENTER);
  if(mouseX > 1000){
  fill(5,5,5,100); // Set fill to gray2
  }
  ellipse(mouseX, mouseY, h, w);


}

function mousePressed() {
  background(random(0,100),random(0,100),random(0,100));

}