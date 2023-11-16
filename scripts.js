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

function round(playerSelection, computerSelection) {
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


function getPlayerChoice() {
    const choice = prompt("Pick rock, paper, or scissors.", "").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice != "scissors") {
        return "Invalid input";
    }
    else {
        return choice;
    }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

const result = round(playerChoice, computerChoice);


console.log(result);