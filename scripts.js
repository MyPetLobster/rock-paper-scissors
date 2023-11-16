// Array representing the possible choices in Rock, Paper, Scissors
const rockPaperScissors = ['rock', 'paper', 'scissors'];

// Function to get a random choice for the computer
function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return rockPaperScissors[index];
}

// Function to get and validate the player's choice
function getPlayerChoice() {
    let isValid = false;
    while (!isValid) {
        const choice = prompt("Pick rock, paper, or scissors.", "").toLowerCase();
        if (rockPaperScissors.includes(choice)) {
            isValid = true;
            return choice;
        } else {
            alert("Invalid input. Please choose rock, paper, or scissors.");
        }
    }
}

// Function to play a single round of Rock, Paper, Scissors
function round() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `Draw -- You both threw ${playerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Function to play the game for a specified number of rounds
function game() {
    let playerWins = 0;
    let computerWins = 0;
    let rndCount = 1;

    // Play until one side wins three rounds
    while (playerWins < 3 && computerWins < 3) {
        let rndResults = round();
        console.log(`Round ${rndCount}: ${rndResults}`);

        // Update scores based on the round results
        if (rndResults.startsWith("You win")) {
            playerWins += 1;
        } else if (rndResults.startsWith("You lose")) {
            computerWins += 1;
        }

        console.log(`You: ${playerWins}\nComputer: ${computerWins}\n`);
        rndCount += 1;
    }

    // Determine the overall winner of the game
    return playerWins === 3 ? "You win!!" : "You lose!!";
}

// Start the game and display the final result
console.log(game());