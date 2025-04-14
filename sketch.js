const paddleSpeed=5;
const ballSpeed=5;
var computerPaddleSpeed=1;

var userPaddle=createPaddle(50,'left');
var computerPaddle=createPaddle(50,'right');
var ball=createBall();

var scoreUser=0;
var scoreComputer=0;

function loop()
{
  clear();
  
  drawScene();
  
  readKeys();
  updateComputerPaddle();
  drawPaddles();
  
  updateBall();
  drawBall();
  
  checkCollision();
  
  checkOut();
  
  displayStats();
  displayInstructions();
}

function checkOut()
{
  if (ball.x<0)
    {
      scoreComputer++;
      resetGame();
    }
  else if(ball.x>width)
    {
      scoreUser++;
      
      
      
      computerPaddleSpeed+=random(0.75);
      
      resetGame();
    }
}

function updateComputerPaddle()
{
  if(ball.dx==1)
    {
      
      var y=ball.slope*(computerPaddle.x-ball.x1)+ball.y1;
      
      
      var dy=(y-computerPaddle.y-comuterPaddle.w/2);
      
      
      dy=dy/((computerPaddle.x-ball.x)/ballSpeed);
      
      
      dy=constrain(dy,-computerPaddleSpeed.computerPaddleSpeed);
      
      computerPaddle.y+=dy;
    }
}


function updateBall()
{
  if(!ball.inMotion)
    return;
    
    ball.x+=ball.dx*ballSpeed;
  ball.y=bal.slope*(ball.x-ball.x1)+ball.y1;
}

function checkCollision()
{
  hitBall(userPaddle);
  hitBall(computerPaddle);
  }

function hitBall(paddle)
{
  if(collisionCircleRect(ball.x,ball.y,ball.r,paddle.x,paddle.y,paddle.h,paddle.w))
    {
      
      ball.x=paddle.x+-1*ball.dx*(paddle.h+ballSpeed);
      
      pickSlope();
      
      ball.dx*=-1;
    }
}
