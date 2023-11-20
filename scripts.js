// Array representing the possible choices in Rock, Paper, Scissors
const rockPaperScissors = ['rock', 'paper', 'scissors'];

// Function to get a random choice for the computer
function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return rockPaperScissors[index];
}

// Global variable selectors
const startGame = document.querySelector("#new-game");
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


// TESTS
window.addEventListener('load', () => updateScore(4, 5));
window.addEventListener('load', () => updateHands('paper', 'scissors'));


// // Reset Score Function
// function resetScore() {
//     userScore.appendChild(userScoreText);
//     computerScore.appendChild(computerScoreText);
// }

// // Update Score Function
// function updateScores(x, y) {
//     userScoreText.nodeValue = `You: ${x}`;
//     computerScoreText.nodeValue = `Super Computer: ${y}`;
// }


// const testButton = document.querySelector(".rps-button");
// testButton.addEventListener("click", updateScores);


// // Load Empty Scores on page load
// window.addEventListener("load", () => {
//     resetScore();
// }, {once: true});



// startGame.addEventListener('click', () => {    
// });




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

