
//Global Variable
var ellipseXPos = 0;
var ellipseYPos = 300;
var ellipseDist = 100;

// Setup code goes here
function setup() {
  createCanvas(1000, 800);
  print("Starting up simple shape");
  rectMode(CENTER);
  ellipseMode(CENTER);

  print("Width="+width);
  print("Height="+height);


 //Set ellipse X pos
  ellipseXPos = width -250;
 }


// Draw code goes here
function draw() {
  background(147,112,219);

  drawRects();
  drawCircles();
  drawEllipse();
  noStroke();
  drawTri();

  fill(204);
  quad(100,100,200,100,200,250,140,230);
//white half of circle
  fill(255);
  arc(480,500,100,100,PI,TWO_PI);
//larger arc 
  fill(100,23,45);
  arc(480,650,200,200,0,PI + QUARTER_PI);

 //gray square with lining
  fill(120,120,120);
  stroke(23);
  strokeWeight(7);
  square(800,600,120);
}

function drawRects(){
//red center rectangle
  fill(255,0,0);
  stroke(23);
  strokeWeight(5);
  rect(width/2,height/2,200,100);

//blueish rectangle with lining
  fill(23,200,200);
  stroke(200);
  strokeWeight(5);
  rect(200,height/2,100,120);
}

function drawEllipse(){
//green ellipse
  fill(10,200,20);
  ellipse(ellipseXPos,ellipseYPos,100,80); 

// yellow ellipse
  fill(210,200,20);
  ellipse(ellipseXPos,ellipseYPos + ellipseDist,30,50); 

//orange ellipse 
  fill(234,100,30);
  stroke(10,200,20);
  strokeWeight(3);
  ellipse(ellipseXPos +ellipseDist, ellipseYPos,50,40);
}
function drawCircles(){
//middle circle on top of red rectangle
  fill(0,102,255);
  strokeWeight(1);
  circle(width/2,height/2,20);
}
//mini white triangle
function drawTri(){
	fill(240);
	triangle(300,100,340,100,310,80);
}
