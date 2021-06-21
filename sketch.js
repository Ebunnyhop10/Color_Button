var btn_red;
var btn_green;
var btn_color

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(600, 500); 
  
  btn_red = createButton("PINK");
  btn_red.position(100,50);
  btn_red.mousePressed(pink_bg);

  btn_green = createButton("BLUE")
btn_green.position(250,50);
btn_green.mousePressed(blue_bg);

btn_color = createButton("YELLOW");
btn_color.position(400,50);
btn_color.mousePressed(color_bg)
}

function draw() {
  background(r,g,b);
}

function pink_bg(){
  r = 255;
  g=0;
  b=255;
}

function blue_bg(){
  r=0;
  g=255;
  b=255;
}

function color_bg(){
  r=255;
  g=255;
  b=0;
}