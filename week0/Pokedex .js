
var prompt = require('prompt-sync')();
var current_money = 1000;
var user_items = [];

//Sword costs $500
// Food costs $100

while(current_money >= 100){
    console.log("You currently have " +  current_money + ". Sword = $500, Food = $100.");
    var choice = prompt("Do you want a sword, or do you want food?");
    if(choice == "sword"){
        if(current_money >= 500){
             current_money = current_money - 500;
             user_items.push("sword");
        }else{
            console.log("Sorry, no money");
        }
        
    }else if(choice == "food" , "Food"){
        current_money = current_money - 100;
        user_items.push("food" , "Food");


    }else{
        console.log("You dont have enough money for that.");


}
}
    console.log("Be prepared. ");
    var seeInventory = prompt("Would you like to check your inventory? (Yes/No) ");
    if(seeInventory == "Yes" , "yes", "yes"){
        console.log("You have" + user_items);
    }else{
        console.log(" Fuck off cunt, play the game. ")
       } if(seeInventory == "No" , "no", "nein"){
            console.log(" I hope your whole family dies of slow painful cancer ")
        } 
        
    