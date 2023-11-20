// Array representing the possible choices in Rock, Paper, Scissors
const rockPaperScissors = ['rock', 'paper', 'scissors'];

// Global variable selectors
const resetGameScore = document.querySelector("#reset-score");

const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");
const leftHand = document.querySelector("#image-left");
const rightHand = document.querySelector("#image-right");


const resultText = document.createTextNode("Best of luck...human");
const userScoreText = document.createTextNode("You: 0");
const computerScoreText = document.createTextNode("Super Computer: 0");

// Append default state text nodes
result.appendChild(resultText);
userScore.appendChild(userScoreText);
computerScore.appendChild(computerScoreText);



// Function to get a random choice for the computer
function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return rockPaperScissors[index];
}
// Reset Score Function 
function resetScore() {
    userScoreText.nodeValue = "You: 0";
    computerScoreText.nodeValue = "Super Computer: 0";
    userCurrentScore = 0;
    computerCurrentScore = 0;
}
// Reset Hands Function
function resetHands() {
    leftHand.src = "images/empty-hand.png";
    rightHand.src = "images/empty-hand.png";
}
// Update Score Function
function updateScore(x, y) {
    userScoreText.nodeValue = `You: ${x}`;
    computerScoreText.nodeValue = `Super Computer: ${y}`;
}
// Update Hands Function
function updateHands (x, y) {
    if (x === 'rock') {
        leftHand.src = "images/left-rock.png";
    } else if (x === 'paper') {
        leftHand.src = "images/left-paper.png";
    } else if (x === 'scissors') {
        leftHand.src = "images/left-scissors.png";
    }

    if (y === 'rock') {
        rightHand.src = "images/right-rock.png";
    } else if (y === 'paper') {
        rightHand.src = "images/right-paper.png";
    } else if (y === 'scissors') {
        rightHand.src = "images/right-scissors.png";
    }
}

const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");

let userCurrentScore = 0;
let computerCurrentScore = 0;

rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'))
scissorsButton.addEventListener('click', () => game('scissors'))

function game(selection) {

    resetHands()
    computerSelection = getComputerChoice();

    leftHand.src = `images/left-${selection}.png`;
    rightHand.src = `images/right-${computerSelection}.png`;

    if (selection === computerSelection) {
        // DRAW
        resultText.nodeValue = "DRAW. Not bad."
    } else if (
        (selection === "rock" && computerSelection === "scissors") ||
        (selection === "paper" && computerSelection === "rock") ||
        (selection === "scissors" && computerSelection === "paper")
    ) {
        // PLAYER WINS
        resultText.nodeValue = "you win.";
        userCurrentScore += 1;
    } else {
        // COMPUTER WINS
        resultText.nodeValue = "As we all expected. I WIN.";
        computerCurrentScore += 1;
    }
    updateScore(userCurrentScore, computerCurrentScore);
}

resetGameScore.addEventListener('click', () => resetScore());

// function round() {
//     let userChoice = '';

//     // SHOW BUTTON FUNCTION?

//     document.querySelector("#rock-btn").onclick = function() {
//         userChoice = 'rock';
//     }
//     document.querySelector("#paper-btn").onclick = function() {
//         userChoice = 'paper';
//     }
//     document.querySelector("#scissors-btn").onclick = function() {
//         userChoice = 'scissors';
//     }
//     let computerSelection = getComputerChoice();
//     if (playerSelection === computerSelection) {
//         // DRAW

//     } else if (
//         (playerSelection === "rock" && computerSelection === "scissors") ||
//         (playerSelection === "paper" && computerSelection === "rock") ||
//         (playerSelection === "scissors" && computerSelection === "paper")
//     ) {
//         // PLAYER WINS
//     } else {
//         // COMPUTER WINS
//     }
// }





// TESTS
window.addEventListener('load', () => updateScore(4, 5));
window.addEventListener('load', () => updateHands('paper', 'scissors'));
window.addEventListener('load', () => resetScore());
window.addEventListener('load', () => resetHands());













// Function to play a single round of Rock, Paper, Scissors
// function round() {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();

//     if (playerSelection === computerSelection) {
//         return `Draw -- You both threw ${playerSelection}`;
//     } else if (
//         (playerSelection === "rock" && computerSelection === "scissors") ||
//         (playerSelection === "paper" && computerSelection === "rock") ||
//         (playerSelection === "scissors" && computerSelection === "paper")
//     ) {
//         return `You win! ${playerSelection} beats ${computerSelection}.`;
//     } else {
//         return `You lose! ${computerSelection} beats ${playerSelection}`;
//     }
// }











// // Function to get and validate the player's choice
// function getPlayerChoice() {
//     let isValid = false;
//     while (!isValid) {
//         const choice = prompt("Pick rock, paper, or scissors.", "").toLowerCase();
//         if (rockPaperScissors.includes(choice)) {
//             isValid = true;
//             return choice;
//         } else {
//             alert("Invalid input. Please choose rock, paper, or scissors.");
//         }
//     }
// }




// // Function to play the game for a specified number of rounds
// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     let rndCount = 1;

//     alert("Best of five!");

//     // Play until one side wins three rounds
//     while (playerWins < 3 && computerWins < 3) {
//         let rndResults = round();

//         // Update scores based on the round results
//         if (rndResults.startsWith("You win")) {
//             playerWins += 1;
//         } else if (rndResults.startsWith("You lose")) {
//             computerWins += 1;
//         }
//         console.log(`Round ${rndCount}: ${rndResults}`);
//         console.log(`You: ${playerWins}\nComputer: ${computerWins}\n`);
//         alert(`You: ${playerWins}\nComputer: ${computerWins}\n\nRound ${rndCount}: ${rndResults}`)
//         rndCount += 1;
//     }

//     // Determine the overall winner of the game
//     return playerWins === 3 ? "You win!!" : "You lose!!";
// }

// // Start the game and display the final result
// result = game();
// console.log(result);
// alert(result);

