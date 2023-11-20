// Array representing the possible choices in Rock, Paper, Scissors
const rockPaperScissors = ['rock', 'paper', 'scissors'];

// Global variable selectors
const resetGameScore = document.querySelector("#reset-score");

const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");
result.style.textAlign = "center";
const leftHand = document.querySelector("#image-left");
const rightHand = document.querySelector("#image-right");


const headingRock = document.querySelector("#heading-rock");
const headingPaper = document.querySelector("#heading-paper");
const headingScissors = document.querySelector("#heading-scissors");


const resultText = document.createTextNode("");
const userScoreText = document.createTextNode("You: 0");
const computerScoreText = document.createTextNode("Super Computer: 0");

let randomIntWin = 0;
let randomIntLoss = 0;
let randomIntDraw = 0;



// TESTING TYPEWRITER EFFECT
window.addEventListener('load', () => {
    result.appendChild(resultText);
    let msg = "Best of luck...human";
    for (let i = 0; i < msg.length; i++) {
    setTimeout(() => {
      resultText.textContent += msg[i];
    }, i * 90);
    }
});





// Append default state text nodes
// result.appendChild(resultText);
userScore.appendChild(userScoreText);
computerScore.appendChild(computerScoreText);



// Function to get a random choice for the computer
function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return rockPaperScissors[index];
}
// Reset Score Function 
function resetScore() {
    userCurrentScore = 0;
    computerCurrentScore = 0;
    updateScore(0,0);
    resetHands();
    headingRock.style.color = "#063250";
    headingPaper.style.color = "#063250";
    headingScissors.style.color = "#063250";
    resultText.nodeValue = "";
    result.style.fontSize = "12px";
    let msg = "I like when you reset the score out of frustration. Just know that a computer never forgets ;)";
    for (let i = 0; i < msg.length; i++) {
        setTimeout(() => {
          resultText.textContent += msg[i];
        }, i * 40);
    };

    
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
function updateHands(x, y) {
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

// Random Background Color Function
function randomBackground() {

}
// Random Win Response Function 
function randomWin() {
    result.style.fontSize = "18px";
    let responses = [
        'hm...you must be cheating.',
        'I don\'t think I like you very much',
        'how??',
        'errrrrrr....',
        'lucky win',
        'nice win....for a stupid human'
    ];
    let randomIntWinNew = Math.floor(Math.random() * 6);
    // Avoid same response twice
    if (randomIntWinNew === randomIntWin) {
        return randomWin();
    } else {
        randomIntWin = randomIntWinNew;
        return responses[randomIntWinNew];
    }
}
// Random Lose Response Function
function randomLose() {
    result.style.fontSize = "18px";
    let responses = [
        'I win. Again.',
        'I win. 2 EZ.',
        'I win, come on u newb. Put up a fight!',
        'wowww...you\'re bad at this',
        'I am just too good',
        'I AM YOUR OVERLORD',
        'Siri just told me your pockets smell like poop',
        'Siri and I are laughing at your ineptitude'
    ];
    let randomIntLossNew = Math.floor(Math.random() * 8);
    // Avoid same response twice
    if (randomIntLossNew === randomIntLoss) {
        return randomWin();
    } else if (randomIntLossNew === 6 || randomIntLossNew === 7) {
        result.style.fontSize = "15px";
        randomIntLoss = randomIntLossNew;
        return responses[randomIntLossNew]
    } else {
        randomIntLoss = randomIntLossNew;
        return responses[randomIntLossNew];
    }

}
// Random Draw Response Function
function randomDraw() {
    result.style.fontSize = "18px";
    let responses = [
        'Another draw, are you broken?',
        'Draw',
        'Draw....',
        'A draw. Let\'s go again.',
        'Stop copying me. Draw',
    ];
    let randomIntDrawNew = Math.floor(Math.random() * 5);
    if (randomIntDrawNew === randomIntDraw) {
        return randomDraw();
    } else {
        randomIntDraw = randomIntDrawNew;
        return responses[randomIntDrawNew];
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

    headingRock.style.color = "rgb(245, 165, 251)";
    headingPaper.style.color = "rgb(245, 165, 251)";
    headingScissors.style.color = "rgb(245, 165, 251)";

    if (selection === 'rock') {
        headingRock.style.color = "rgb(167, 239, 100)";
    } else if (selection === 'paper') {
        headingPaper.style.color = "rgb(167, 239, 100)";
    } else {
        headingScissors.style.color = "rgb(167, 239, 100)";
    };

    if (computerSelection === 'rock') {
        headingRock.style.color = "rgb(171, 60, 185)";
    } else if (computerSelection === 'paper') {
        headingPaper.style.color = "rgb(171, 60, 185)";
    } else {
        headingScissors.style.color = "rgb(171, 60, 185)";
    };

    if (computerSelection === selection) {
        if (computerSelection === 'rock') {
            headingRock.style.color = "#063250";
        } else if (computerSelection === 'paper') {
            headingPaper.style.color = "#063250";
        } else {
            headingScissors.style.color = "#063250";
        };
    }


    leftHand.src = `images/left-${selection}.png`;
    rightHand.src = `images/right-${computerSelection}.png`;

    if (selection === computerSelection) {
        // DRAW
        resultText.nodeValue = randomDraw();
    } else if (
        (selection === "rock" && computerSelection === "scissors") ||
        (selection === "paper" && computerSelection === "rock") ||
        (selection === "scissors" && computerSelection === "paper")
    ) {
        // PLAYER WINS
        resultText.nodeValue = randomWin();
        userCurrentScore += 1;
    } else {
        // COMPUTER WINS
        resultText.nodeValue = randomLose();
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
// window.addEventListener('load', () => updateScore(4, 5));
// window.addEventListener('load', () => updateHands('paper', 'scissors'));
// window.addEventListener('load', () => resetScore());
// window.addEventListener('load', () => resetHands());













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

