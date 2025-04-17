var xBall=Math.floor(Math.random()*300)+100;
var yBall=100;
var xSpeed=(2,7);
var ySpeed=(7,2);
var score=0

function setup(){
  createCanvas(400,400);
}

function draw(){
  
  background(0);
  
  fill('#FFF');
  rect(mouseX,375,90,15);
  
  move();
  display();
  bounce();
  paddle();
  
  fill('pink');
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
  if(yBall<10||
    yBall>400-10){
    ySpeed=-1;
  }
}


function display(){
  fill('pink');
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
