var x = 0;
var c = 0;
var d = 0;

function setup() {
  createCanvas(600,600);
  //noFill();
 // for(i=0; i< 30 ; ++i){
  
 // }
}

function draw() {
  background(255);//eraser
  fill(20+sin(c)*(200-30),70+sin(c)*(200-60),100+sin(c)*(200-90));

  ellipse(sin(d)*600,sin(d)*600,sin(x)*100,sin(x)*100);//changing the size values changes the size
  x=x+0.05;//adjusting this number makes the frames slower
  c=c+0.05;
  d=d+0.05
}