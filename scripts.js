// getComputerChoice() will randomly return 'Rock', 'Paper'
// or 'Scissors'

// Write function that plays a single round of RCP
// func should take 2 param -- playerSelection, computerSelection
// and return a string that declares the winner of a round
// "You lose! Paper beats Rock"
// ** case insensitive playerSelection

// Write a new function called game(). Use prev func
// 5 round game

const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return rockPaperScissors[index];
}

function getPlayerChoice() {
    const choice = prompt("Pick rock, paper, or scissors.", "").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice != "scissors") {
        return "Invalid input";
    }
    else {
        return choice;
    }
}

function round() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw -- You both threw Rock";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock."; 
        } else {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection === "paper") {
            return "Draw -- You both threw paper"; 
        } else {
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors.";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beats Paper."; 
        } else {
            return "Draw -- You both threw scissors";
        }
    }
}


function game() {
    let playerWins = 0;
    let computerWins = 0;
    let rndCount = 1;
    while (playerWins < 3 && computerWins < 3) {
        let rndResults = round();
        console.log(`Round ${rndCount}: ${rndResults}`);
 

        if (rndResults.startsWith("You win")) {
            playerWins += 1;
        } else if (rndResults.startsWith("You lose")) {
            computerWins += 1;
        }

        console.log(`You: ${playerWins}\nComputer: ${computerWins}\n`)
    }
    
    if (playerWins === 3) {
        return "You win!!";
    } else {
        return "You lose!!";
    }
}

console.log(game());




