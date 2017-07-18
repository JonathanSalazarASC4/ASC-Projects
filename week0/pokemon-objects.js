var FirstPokemon = {
    "attack" : 25 , 
    "HP" : 60 ,
    "def" : "" , 
    "legend" : false , 
    "name" : "Spoink",
    "type" : "Physic",
};
var SecondPokemon = {
    "attack" : 55 , 
    "HP" : 40 ,
    "def" : 30 , 
    "legend" : false , 
    "name" : "Starly",
    "type" : "Flying and Normal",
};
var ThirdPokemon = {
    "attack" : 65 , 
    "HP" : 50 ,
    "def" : 90 , 
    "legend" : false , 
    "name" : "Pineco",
    "type" : "Bug" 
};
var FourthPokemon = {
    "attack" : 60 , 
    "HP" : 90 ,
    "def" : 60 , 
    "legend" : false , 
    "name" : "Phanpy",
    "type" : "Ground",
};
var FifthPokemon = {
    "attack" : 60 , 
    "HP" : 90 ,
    "def" : 60 , 
    "legend" : false , 
    "name" : "Phanpy",
    "type" : "Ground"
}
var SixthPokemon = {
    "attack" : 130 , 
    "HP" : 106 ,
    "def" : 154 , 
    "legend" : true , 
    "name" : "Ho-Oh",
    "type" : "Fire and Flying"
};

var pokeRoster = [ FirstPokemon , SecondPokemon , ThirdPokemon , FourthPokemon , FifthPokemon , SixthPokemon];
function printRoster(){

for(var i = 0; i < pokeRoster.length; i++){
 console.log(pokeRoster[i]); 
}
}