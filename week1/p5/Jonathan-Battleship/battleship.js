var grid = [[0, 1 , 2 , 3 , 4 , 5] ,
             [0 , 1 , 3 , 4 , 5] , 
             [0 , 1 , 2 , 3 ,  4 , 5] , 
            [0 , 1 , 2 , 3 , 4 , 5] ,
            [ 0 , 1 , 2 , 3 , 4 , 5]
            [ 0 , 1 , 2 , 3 , 4 , 5]];




function setup(){
    createCanvas(755,755);
    background("black");
    rectMode(CORNER);
    for(var x = 0 ; x < 6; x++){
        for(var y = 0; y < 6; y++){
            strokeWeight(5);
            rect(x * 125, y *125, 125 , 125)
           

        }
    }
}
{
  
}


function draw(){
 //Array 1
   

    
        
}

function mouseClicked(){
    for(var x = 0 ; x < 6; x++){
        for(var y = 0; y < 6; y++){
    fill("black");
  rect(x * 125,x * 125,125,125);
  fill("white");
  return false;
}
    }}




