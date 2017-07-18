var myPokemon = [["Squirtle" , "Water" , 44 , 65 , 48 , false] , 
                ["Dito" , "Nomrmal" , 48 , 48 , 48 , false] ,
                ["Magmar" , "Fire" , 65 , 57 , 95 , false ] ,
                ["Rotom" , "Electric and Ghost", 50 , 77 , 50, false] 
                , ["Uxie" , "Physic" , 75 , 130 , 75 , false] 
                , ["Shaymin" , "Grass" , 100 , 100 , 100 , true]];

var pokeDesc = '';
for(var i = 0; i < myPokemon.length; i++){
   for(var j = 0; j < myPokemon[i].length; j++){
       pokeDesc = pokeDesc + myPokemon[i][j] + ' ';
   }
   pokeDesc = pokeDesc + '\n';
}
console.log(pokeDesc);