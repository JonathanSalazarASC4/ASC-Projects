var x = 30;
var y = 30;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(1000, 1000);
  background (25);
  fill(255)
  strokeWeight(4)
  line(0 , 20 , 1000 , 0);

}

function draw() {

	//distance from center of the screen
	var d = dist(50, 50, mouseX, mouseY);
    background(25);
  	fill (random(20 , 250), random(20 , 250), random(200, 250));
  	ellipse (x , y , d, d);

  	//bouncing horizontally
 	x = x + xspeed;
  	
  	 if (x > 1000 || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 1000 || y < 0) {
	 	  yspeed = -yspeed;
  	}

}
