var charizard = {
    "attack" : "Blaze",
    "HP" : 266,
    "Legendary" : false,
    "types" : ["Fire" , "Flying"]
};

function Superhero(realName, power, sidekick, 
                    race, gender, hideout, 
                    nemesis, universe){
    this.realName = realName;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.nemesis = nemesis;
    this.universe = universe;
    this.talk = function talk(){
        console.log("Hello my name is " + this.realName );
    }
}

//creating an instance of the superhero
var superman = new Superhero("Clark Kent" , "Heat vision" , false, 
                            "Kryptonian", "Male", "Metropalis", 
                            "Lex Luther" , "DC");


function Pizza(sauce, cheese, toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;

var pizza = new Pizza("tomato sauce" , "mozzerlla" , ["pinapples" , "ham" , "bacon"], "XXL"); 

}