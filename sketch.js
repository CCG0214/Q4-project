var xBall=Math.floor(Math.random()*300)+100;
var yBall=100;
var xSpeed=(2,7);
var ySpeed=(7,2);
var score=0


function setup(){
  createCanvas(400,400);
  alert('use mouse to control the paddle to bounce the sun!');
}

function draw(){
  
  background('rgb(150,237,255)')
  
  fill('#FFF');
  rect(mouseX,375,90,15);
  
  
  fill('rgb(255,255,255)');
  circle(380,15,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(350,0,50);
  noStroke();

  
  
  fill('rgb(255,255,255)');
  circle(50,80,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(70,60,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(30,70,40);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(90,80,50);
  noStroke();
  
  
  
    
  fill('rgb(255,255,255)');
  circle(250,180,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(270,150,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(230,170,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(290,180,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(310,160,40);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(320,180,40);
  noStroke();
  
  
  fill('rgb(255,255,255)');
  circle(50,280,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(70,260,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(30,270,40);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(90,280,50);
  noStroke();
  
  fill('rgb(255,255,255)');
  circle(110,265,50);
  noStroke();
  
  move();
  display();
  bounce();
  paddle();

  fill('#03A9F4');
  textSize(24);
  text("Score:"+score,10,25);
}

function move(){
  xBall+=xSpeed;
  yBall+=ySpeed;
}

function bounce(){
  if(xBall<10||
    xBall>400-10){
    xSpeed*=-1;
  }
  if(yBall>400-10){
    ySpeed=-1;
  }
  if (yBall<10) {
    ySpeed = 1; 
  }
}


function display(){
  fill('#FCE200');
  ellipse(xBall,yBall,20,20);
}

function paddle(){
  if((xBall>mouseX &&
     xBall<mouseX+90)&&
    (yBall+10>=375)){
    xSpeed*=-1;
    ySpeed*=-1;
    score++;
    
  }
}
