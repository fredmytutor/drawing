var clk = false;
var colpenr = 0;
var colpenb = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
//draw the colour bar
  for(x=50;x <= (windowWidth - 100);x=x+1){
    let colscalex = map(x,50,windowWidth - 50,0,250)
   

    for(y=50;y<=(windowHeight/5);y=y+1){
      let colscaley = map(y,50,windowHeight/5,0,250)
      noStroke();
      fill(colscalex,0,colscaley);
      rect(x,y,5,5);
    }
  
  noStroke();
   fill(colscalex,0,0);
  rect(x,50,50,5);
  y=50;
  };

//pen tool should draw if the mouse is press
  if(clk == true){
    fill(colpenr,0,colpenb);
    ellipse(mouseX,mouseY,15,15);
    };
};

//check to see if the mouse is press
function mousePressed(){
  clk = !clk;
//set the pen tool colour
if(mouseY > 50 && mouseY < windowHeight){
  colpenr = map(mouseX,50,windowWidth - 50,0,250)
  colpenb = map(mouseY,50,windowHeight/5,0,250);
  // print(colpen);
}
  };
function mouseReleased(){
   clk = !clk;
  };