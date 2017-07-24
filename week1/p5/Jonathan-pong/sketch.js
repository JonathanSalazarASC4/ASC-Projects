var gameStart = false;
var paddleL = {
  x: 10,
  y: 100,
  w: 15,
  h: 100,
};
var paddleR = {
  x: 770,
  y: 100,
  w: 15,
  h: 100,
};
var ball = {
  x: 50,
  y: 20,
  diam: 25,
  speedX: 5,
  speedY: 5,
};
var speedX = 5;
var speedY = 5;
var paddleSpeed = 12;
var s = "Welcome to the Jonathan Pong Game";

/*function down(x){
 x = x + 5;
}*/


function setup() {
  createCanvas(800, 600);
  smooth();
  background(0,255,127);
  fill(255)
  text(s, 10, 10, 70, 80);
  strokeWeight(10)
   line(400,300,70,80);
}

function keyPressed(){
	if ("W" === true) {
  gameStart === true;
  }
}
function draw() {

  
  
    background(0,255,127);
    noStroke();

  createLeftPaddle();
  createRightPaddle();
  createBall();
  ballBounceTopAndBottom();
  ballBounceRight();
  ballBounceLeft();
  
  

}
  function createBall() {
    fill(198, 237, 44);
    ellipse(ball.x, ball.y, ball.diam, ball.diam);

    ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;
  }



  function createLeftPaddle() {
    fill(0, 50, 50);
    rect(paddleL.x, paddleL.y, paddleL.w, paddleL.h);
    if (keyIsDown(LEFT_ARROW) === true) {
      if (paddleL.y + paddleL.h < height - 5) {
        paddleL.y = paddleL.y + paddleSpeed;
      }
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
      if (paddleL.y > 5) {
        paddleL.y = paddleL.y - paddleSpeed;
      }
    }
  }

  function createRightPaddle() {

    fill(50, 50, 0);
    rect(paddleR.x, paddleR.y, paddleR.w, paddleR.h);

    if (keyIsDown(DOWN_ARROW) === true) { //move paddle down
      if (paddleR.y + paddleR.h < height - 5) {
        paddleR.y = paddleR.y + paddleSpeed;
      }
    }
    if (keyIsDown(UP_ARROW) === true) { //move paddle up
      if (paddleR.y > 5) {
        paddleR.y = paddleR.y - paddleSpeed;
      }
    }

  }

  function ballBounceTopAndBottom() {

    
    if (ball.y + 12.5 > height || ball.y < 12.5 && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; //reverse the direction of the motion
      ball.y = ball.y + speedY; //keeps things moving
      

    }

  }
function ballBounceRight() {
   
    if (ball.x + 12.5 > paddleR.x && ball.y + 12.5 > paddleR.y && ball.y + 12.5 < paddleR.y + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX * -1; 
      ball.x = ball.x + speedX;
     


    }
    
    else if (ball.y + 12.5 > paddleR.y && ball.y < paddleR.y + paddleR.y + paddleR.h && ball.x + 12.5 > paddleR.x && ball.x < paddleR.x + paddleR.x && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; //reverse the direction of the motion
      ball.y = ball.y + speedY; //keeps things moving
     
    }

    //if the edge of the ball is higher than rect y plus height and 
    //the x of the ball is greater than the x of the rect and less than the width
    else if (ball.y + 12.5 < paddleR.y + paddleR.h && ball.y > paddleR.y && ball.x > paddleR.x && ball.x < paddleR.x + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; //reverse the direction of the motion
      ball.y = ball.y + speedY; //keeps things moving
      
    }
  }

function ballBounceLeft() {
   
    if (ball.x - 12.5 < paddleL.x + paddleL.w && ball.y + 12.5 > paddleL.y && ball.y + 12.5 < paddleL.y + paddleL.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX * -1; //This reverses the direction, I think
      ball.x = ball.x + speedX; 
     
    }
  }