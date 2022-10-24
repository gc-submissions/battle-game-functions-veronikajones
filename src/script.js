"use strict";

let randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Math.random()                        ==> 0.9953455
// Math.random() * 10                   ==> 9.953455
// Math.floor(Math.random() * 10)       ==> 9.000
// Math.floor(Math.random() * 10) + 1   ==> 10.000

// Math.random()                        ==> 0.0953455
// Math.random() * 10                   ==> 0.953455
// Math.floor(Math.random() * 10)       ==> 0.000
// Math.floor(Math.random() * 10) + 1   ==> 1.000

const chooseOption = (opt1, opt2) => {
  let randNum; 
  if (Math.floor(Math.random() * 2) == 0) { 
    return opt1;
} else{
     return opt2;}
}

// Math.random()                        ==> 0.9953455
// Math.random() * 2                    ==> 1.9976347
// Math.floor(Math.random() * 2)        ==> 1.000
// Math.floor(Math.random() * 2) == 0   ==> false

/*
    let randNum = Math.floor(Math.random() * 2) == 0 ? opt1 : opt2;

    is the same as: 

    let randNum;
    if(Math.floor(Math.random() * 2) == 0){
        randNum =  opt1;
    }
    else{
        randNum =  opt2;
    }
    return randNum;
*/


//Declare a function expression named attackPlayer that has one parameter named health which returns a number equal to health minus the result of the randomDamage function

function attackPlayer(health) {
  return (health - randomDamage(health));
}

//Declare an arrow function named logHealth that has two parameters named player and health which has a console.log method to state the following message: “player health: health”.
let logHealth = (player, health) => {
  console.log(player + " health: " + health);
}

//Declare an arrow function named logDeath that has two parameters named winner and loser which has a console.log method to state the following message: “winner defeated loser”

let logDeath = (winner, loser) => {
  console.log(winner + " defeated " + loser);
}

//Declare an arrow function named isDead that has one parameter named health which returns a boolean value of true or false based on the following condition: health <= 0;

let isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
}

/*
    Declare a function declaration named fight that has four parameters.
    Parameters:
    player1 - this will hold the name of the first player
    player2 - this will hold the name of the second player
    player1Health - this will hold the health of the first player
    player2Health - this will hold the health of the second player
    Within the fight function, write a while loop that loops while true
    Declare and initialize a variable named attacker equal to the chooseOption function with player1 and player2 as arguments.
    If attacker is equal to player1. 
        Set player2Health equal to the result of attackPlayer with player2Health as its argument.
        Calls the logHealth function with player2 and player2Health as its arguments.
        If the result of isDead with player2Health as an argument is true:
        Call the logDeath function with player1 and player2 as arguments.
    Break
    Has an else statement that:
        Sets player1Health equal to the attackPlayer function with player1Health as its argument.
        Calls the logHealth function with player1 and player1Health as its arguments.
        If the result of isDead with player1Health as an argument is true:
        Call the logDeath function with player2 and player1 as arguments.
    Break

    Lastly, call the fight function with the required four parameters. You pick the names and starting health. For example: player1: “Mitch”, player2: “Adam”, player1Health: 100, player2Health: 100.
 */

let fight = (player1, player2, player1Health, player2Health) => {
  // Within the fight function, write a while loop that loops while true
  while(!isDead(player1Health) && !isDead(player2Health)){
//   while (true) {
    // Declare and initialize a variable named attacker equal to the chooseOption function with player1 and player2 as arguments.
    let attacker = chooseOption(player1, player2);

    //If attacker is equal to player1.
    if (attacker === player1) {
      // Set player2Health equal to the result of attackPlayer with player2Health as its argument.
      player2Health = attackPlayer(player2Health);
      //Calls the logHealth function with player2 and player2Health as its arguments.
      logHealth(player2, player2Health);
      //  If the result of isDead with player1Health as an argument is true:
      if (isDead(player2Health)) {
        //Call the logDeath function with player1 and player2 as arguments.
        logDeath(player1, player2);
      }
    //   break;

    } else {
      //Sets player1Health equal to the attackPlayer function with player1Health as its argument.
      player1Health = attackPlayer(player1Health);
      //Calls the logHealth function with player1 and player1Health as its arguments.
      logHealth(player1, player1Health);
      // If the result of isDead with player1Health as an argument is true:
      if (isDead(player1Health)) {
        //Call the logDeath function with player2 and player1 as arguments.
        logDeath(player2, player1);
      }
    //   break;
    }

  }
};

   //Lastly, call the fight function with the required four parameters. You pick the names and starting health. For example: player1: “Mitch”, player2: “Adam”, player1Health: 100, player2Health: 100.
fight("Mitch", "Adam", 100, 100);