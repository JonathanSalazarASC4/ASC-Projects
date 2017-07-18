var mashArray = ["Dream Land" , "Congo Jungle" , "Hyrule Castle" , "Planet Zebes" ];
var firstQuestion = [1,2,3]
var secondQuestion = ["Kirby" , "Mario" , "Kirby"]
var prompt = require('prompt-sync')();
function userAns() {
    var FQ = prompt("How many times will you strike? ");
    var SQ = prompt("Who will you choose to fight? ");
    firstQuestion.push(FQ);
    secondQuestion.push(SQ);
}

    userAns();
    
    function results(){

     var randomStrikes = Math.floor(Math.random() * firstQuestion.length);
     var randomChar = Math.floor(Math.random() * secondQuestion.length);
     var randomWorld = Math.floor(Math.random() * mashArray.length);
     console.log("You have fought " +  secondQuestion[randomChar] + " In " + mashArray[randomWorld] + " and striked " + firstQuestion[randomStrikes] + " times!"); 
    }



results()





    