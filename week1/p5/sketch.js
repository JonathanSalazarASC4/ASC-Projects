console.log("HELLO WORLD");

function setup(){
    createCanvas(500, 500);
    background(225);
    //Making Background
    fill("yellow");
    ellipse(width / 2, height / 2,400);
    //Everything else is black
    fill("black");
    //Thicker lines
    strokeWeight(10);
    //Top sunglasses
    line(80, 150, 420, 150);
    //Mouth Line
    line(150,350,width - 150,350);
    //Rectangles
    rect(150 , 150, 80 , 40 );
    rect( width - (150 + 80) , 150 , 80 , 40 ,);


}
function mousePressed(){
   fill("red");
   ellipse(mouseY,mouseY , 10);
}

