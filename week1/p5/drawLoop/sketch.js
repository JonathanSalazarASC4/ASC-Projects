function setup(){
    createCanvas(800, 800);
    background("black");

}
var x = 0;

function draw(){
   //Has to match with canvas background to leave a transparent trail.
    background("black");
    ellipse(x,200,200,200);
    x = x + 1;
    //x++ same thing.
}