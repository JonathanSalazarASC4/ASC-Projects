function setup(){
    createCanvas(650, 650);
    background(209,208,206);
       
        //Attack Bar
    strokeWeight(3)
    fill("green");
    rect(0,500,650,150);
    
      
       //text bar
      
       strokeWeight(5)
    fill("white");
    rect(0,580,480,65,10);
    text("What will pikachu choose?")
   
    // HP bar
    
    strokeWeight(5)
    fill("white");
    rect(500,580,145,65,10);
    
    //3 Attack Bars
    
    fill("white");
    rect(10,510,145,60,10);
    fill("white");
    rect(200,510,145,60,10);
    fill("white");
    rect(400,510,145,60,10);

    //Pokemons
    strokeWeight(0)
    fill("red")
    ellipse(110,400,140,140)
    fill("blue")
    ellipse(540,100,140,140)

   //Pokemon Names
   fill("black")
    textSize(30)
    text(name,270,390)
     fill("black")
    textSize(30)
    text(name2,300,95)

}

function draw(){
    //HP bar
    strokeWeight(1)
    fill(0);
   textSize(20);
   text('hp: ', 220, 410);
   fill(250);
   rect(250, 400, 300, 15);
    fill(0);
   textSize(20);
   text(': hp ', 430, 113);
   fill(250);
   rect(130, 100, 300, 15);
    //2econd HP
     strokeWeight(1)
    fill(0);
   textSize(20);
   text('hp: ', 220, 410);
   fill("green");
   rect(250, 400, num200 , 15);
    fill(0);
   textSize(20);
   text(': hp ', 430, 113);
   fill("green");
   rect(130, 100, num100, 15);
   //Text for text bar
    strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(35)
  text("What will you choose?", 10, 590, 1000, 1000);

//Text for atk bar
strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke("yellow");
  }
  else {
    noStroke();
  }
  textSize(20)
  text(attack, 25, 525, 1000, 1000);
strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(20)
  text(attack1, 210, 525, 1000, 1000);

strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(20)
  text(attack2, 438, 525, 1000, 1000);

strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  // REMINDER - Hp + variable for text
  textSize(20)
  text("HP: ", 530 , 599, 1000, 1000);

}
    
function Pokemon(realName , HP , ATK){
    this.realName = realName;
    this.HP = HP;
    this.ATK = ATK;
}

var pikachu = new Pokemon("Pikachu" , 35 , ["Thunderbolt" , "Tail Whip" , "Spark"] );
var onix = new Pokemon("Onix" , 35 ,  ["Rock Tomb" , "Dragon Breath" , "Iron Tail"]);
var vulpix = new Pokemon("Vulpix", 38 , ["Ember" , "Inferno" , "Hex"] );
var charizard = new Pokemon ("Charizard",78 , ["Metal Claw" , "Flamethrower" , "Fire Blast"])
var piplup = new Pokemon ("Piplup",53 , ["Bubble Beam" , "Whirlpool" , "Drill Peck"]);
var myArray = [pikachu, onix, vulpix, charizard, piplup];

//Name
var num  = Math.floor(Math.random() * 5);
var name = myArray[num].realName
var num2 = Math.floor(Math.random() * 5);
var name2 = myArray[num2].realName

//attack
var attack = myArray[num].ATK[0]
var attack1 = myArray[num].ATK[1]
var attack2 = myArray[num].ATK[2]
var num100 = 300;
var num200 = 300;
 function mouseClicked(){
   if(mouseY > 500 ){
       num100 = num100 -Math.floor(random(0,50))
       if(mouseY > 500){
           num200 = num200 - Math.floor(random(0,60) )
           

   }
   }}

