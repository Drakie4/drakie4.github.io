// rock paper SCISSORSS 
let choices = ["scissor", "rock", "paper"]; 

let choicePlay = prompt("rock or scissor or paper ???(input ur choice)");

let randomer = Math.floor(Math.random() * 10) % 3;
let gameschoice = choices[randomer];

// win lose tie
let results;

if (choicePlay == "rock") {
    if (gameschoice == "rock") {
        results = "tie";
    } else if (gameschoice == "scissor") {
        results = "win"
    } else if (gameschoice == "paper") {
        results = "lose"
    }
} else if (choicePlay == "paper") {
    if (gameschoice == "paper"){
        results = "tie";
    } else if (gameschoice == "rock") {
        results = "win";
    } else if (gameschoice == "scissor") {
        results = "lose"
    }
} else if (choicePlay == "scissor") {
    if (gameschoice == "scissor") {
        results = "tie"
    } else if (gameschoice == "paper") {
        results = "win"
    } else if (gameschoice == "rock") {
        results = "lose"
    }
} else {
    results = "fucking idiot"
}

alert(choicePlay + " vs " + gameschoice + " = " + results);
