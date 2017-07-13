var myPokemonRoster = ["Dragonite", "Charmander", "Pikachu", "Onix", "Piplup"];

var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
var thirdToFight = myPokemonRoster[2];
myPokemonRoster.pop(4);
myPokemonRoster.push("Magikarp");
myPokemonRoster.push("Steelex");
var RosterSize = myPokemonRoster.length;

console.log(myPokemonRoster);
for (var i = 0; i < myPokemonRoster.length; i++) {
    console.log(myPokemonRoster[i]);
}

for (var i = myPokemonRoster.length - 1 ; i > -1; i--) {
    console.log(myPokemonRoster[i]); }

