var on = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
background(0,0,0);

//is the light on
if(on == true){
  background(0,250,250)
}

//draw the light switch
fill(250,250,250);
rect(100,100,50,50);

//draw the hand
fill(100,0,0);
ellipse(mouseX,mouseY,25,25);
};

function mousePressed() {
  if(mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 150){
  on = !on;
  print(on);
  }
};