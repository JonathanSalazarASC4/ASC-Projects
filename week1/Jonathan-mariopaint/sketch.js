function setup(){
    createCanvas(1000,2000);
    background(225);
}

   

function mouseDragged(){
    color1 = random(0 , 255);
    color2 = random(0, 255);
    color3 = random(0 , 255)
   
  
    fill(color1 , color2, color3);
    var j = Math.floor(Math.random() * 50 );
      fill(color1 , color2, color3);
   ellipse(mouseX, mouseY, j , j);
    //Everything else is black
  fill(color1 , color2, color3);
    //Thicker lines
    strokeWeight(5);
   
    //Mouth Line

    line(150,350,width - 150,350);
    //Rectangles
    rect(150 , 150, 80 , 40 );
    rect( width - (150 + 80) , 150 , 80 , 40 ,);


}

function mouseMoved(){
    fill(225);
    strokeWeight(0);
    ellipse(mouseX, mouseY,20,20);
}




var letters = ["a", "b", "c", "d", "e", "f" , "g" , "h" , "i", "j" , "k" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
   
   var value = 0;
   function draw(){
        fill(255)
        rect(50,50,50,50);
   }
    function keyTyped() {
        if(key === letters){
value = random(0,255);
        }
    }

