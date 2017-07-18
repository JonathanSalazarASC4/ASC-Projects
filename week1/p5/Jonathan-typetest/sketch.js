
function setup() {
    createCanvas(1000, 1000);
    background(218, 247, 166);
    textSize(30);
    text("Welcome to the Jonathan Letter Game Of Awesome! ", 100, 30);
}
  
  var a = 0;
  var b = -100;
  var c = -200;
  var d  = -300;
  var e =  -400;


  function draw(){
     background(218, 247, 166);
     textSize(30);
     text("Welcome to the Jonathan Letter Game Of Awesome! ", 100, 30);
      fill(0);
      text("His Palms are sweaty" , a , 500, 100 , 20 );
      a = a + 1;
      text("knees weak arms are heavy" , b , 400 , 20 , 20);
      b = b + 1;
      text("there is vomit on my sweater already" , c , 300 , 20, 20);
      c = c + 1;
      text("Mom spaghetti" , d , 200, 20, 20);
      d = d + 1;
      text("He is nervous" , e , 550 , 20 , 20)
      e = e + 1;
      
  }
  
  