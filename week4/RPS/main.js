var database = firebase.database().ref();
var loses = 0;
var wins = 0;
var done = false;


function updateDB(name){
    console.log(name + ": " + wins);
    var data = {
        NAME: name,
        SCORE: wins,
        
    }
    database.push(data);
}
			
function play(userChoice) {
					
					document.getElementById("player").innerHTML="";
					document.getElementById("opponent").innerHTML="";
					document.getElementById("results").innerHTML="";
				
					
					if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
						document.getElementById("player").innerHTML='You chose' + ' ' + userChoice + '.';
					} else if (userChoice == "rope") {
						document.getElementById("player").innerHTML='You chose' + ' ' + userChoice + '. <br />Well aren\'t you a smarty pants.';
					} else {
						document.getElementById("player").innerHTML="That is not a valid choice, try again.";
						
						return false;
					}
				
					var computerChoice = Math.random();
					if (computerChoice < 0.34) {
						computerChoice = "rock";
					} else if(computerChoice <= 0.67) {
						computerChoice = "paper";
					} else {
						computerChoice = "scissors";
					}
				 
				 	document.getElementById("opponent").innerHTML='// Your opponent chose' + ' ' + computerChoice + '.';
				 
					 var compare = function (choice1,choice2) {
						if (choice1 == choice2) {
							return "The result is a tie!";
						} else if (choice1 == "rock"){
							if (choice2 =="scissors") {
								wins++;
								return "rock wins. rock on.";
							} else {
								loses++;
								return "sorry. paper wins.";
							}
						} else if (choice1 == "paper") {
							if (choice2 == "rock") {
								wins++;
								return "paper wins";
							} else {
								loses++;
								return "sorry. scissors win.";
							}
						} else if (choice1 == "scissors") {
							if (choice2 == "rock") {
								loses++;
								return "sorry. rock wins";
							} else {
								wins++;
								return "scissors win";
							}
                            
						}

					};

					var winner = compare(userChoice,computerChoice);
					document.getElementById("results").innerHTML=winner;
					document.getElementById("wins").innerHTML=wins;
					document.getElementById("loses").innerHTML=loses;
					
					if (wins > 99 || loses > 99) {
						document.getElementById("wins").style.fontSize="44";
						document.getElementById("loses").style.fontSize="44";
					}
					if (wins > 999) {
						alert("You reached the max score of 999. <br />Congratulations, you have no life.");
					}
					if (loses > 999) {
						alert("Your opponent reached the max score of 999. <br />We're sorry, you have no life.");
					}
                   if ( loses == 10 && done == false){
                        play(false);
                        var name = window.prompt("Type Your Name ");
                        done = true;
                        updateDB(name); 
                    }
                   $(".allMessages").text(wins);

			};

var reset = function() {
	loses = 0;
	wins = 0;
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("loses").innerHTML=loses;
};