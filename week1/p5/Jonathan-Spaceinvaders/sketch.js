var x = 400; 
var y = 700; 
var w = 10; 
var h = 15; 
      
      
      function Bullet(x,y,width,height){
   this.x = x + 40;
   this.y = y;
   this.width= w;
   this.height= h;
}
function setup(){
createCanvas(750, 800);
background('lightcyan');
}

//Stores all bullets
var bulletHolder=[];


// player
function draw(){
background("lightcyan");
noStroke();

var playerRect = rect(x,700,100,30);
var cannon = rect(x+40,y-20,20,20);

    fill("black");
    strokeWeight(5);
    //Shapes
    
    ellipse(100, 100, 50, 30);
    ellipse(200, 100, 50, 30);
    ellipse(300, 100, 50, 30);
    ellipse(400, 100, 50, 30);
    ellipse(500, 100, 50, 30);
    ellipse(600, 100, 50, 30);
    ellipse(100, 250, 50, 30); ellipse(200, 250, 50, 30); ellipse(300, 250, 50, 30); ellipse(400, 250, 50, 30); ellipse(500, 250, 50, 30); ellipse(600, 250, 50, 30);
    ellipse(100,400,50,30);
    ellipse(200,400,50,30);
    ellipse(300,400,50,30);
    ellipse(400,400,50,30);
    ellipse(500,400,50,30);
    ellipse(600,400,50,30);
    ellipse(900,300,50,50);
    // Technical stuff

for(i = 0; i < bulletHolder.length; i++){
 rect(bulletHolder[i].x, bulletHolder[i].y, w, h);
 bulletHolder[i].y = bulletHolder[i].y-10; 
}
if (keyIsDown(LEFT_ARROW)) {
   x = x - 5;
 }
 if (keyIsDown(RIGHT_ARROW)) {
   x = x + 5;
 }

        if (x >= 665) {
        x = 665}

 if (x <= 0) {
        x = 0}

}

function keyPressed(){
 if (keyCode == 32) {
   bulletHolder.push(new Bullet(x,y-10,w,h));
   
 }
}

