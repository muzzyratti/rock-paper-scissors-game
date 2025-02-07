

// Get random Computer Choice
let computerChoice = "";

function getComputerChoice(max) {
    computerChoice = Math.floor(Math.random() * max);
    switch (computerChoice) {
        case 0:
            computerChoice = "Rock";
            return computerChoice;
            break;
        case 1:
            computerChoice = "Paper";
            return computerChoice;
            break;
        case 2:
            computerChoice = "Scissors";
            return computerChoice;
            break;
    }
  }

getComputerChoice(3);
console.log(`Computer choice: ${computerChoice}`);

// Ask user for Human Choice
let humanChoice = "";

function getHumanChoice () {
    humanChoice = prompt("What is your choice? (choose only from: rock, paper or scissors)").toLowerCase();

    if (humanChoice === 'rock'|| humanChoice === 'paper'|| humanChoice === 'scissors') {
        return humanChoice = String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1);
    } else {
        alert ("Please choose only from: rock, paper or scissors.");
        getHumanChoice();
    }
}

getHumanChoice();
console.log(`Human choice: ${humanChoice}`);

function playGame () {
    
// Initiate players scores
let humanScore = 0;
let computerScore = 0;

// Playing 1 round
function playRound (humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        return alert('It is a draw!')
    } else if (humanSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        return alert('You lose! Paper beats Rock.');
    } else if (humanSelection == "Rock" && computerSelection == "Scissors") {
        humanScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        return alert('You win! Rock beats Scissors.');
    } else if (humanSelection == "Paper" && computerSelection == "Rock") {
        humanScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        return alert('You win! Paper beats Rock.');
    } else if (humanSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        return alert('You lose! Scissors beats Paper.');
    } else if (humanSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        return alert('You lose! Rock beats Scissors.');
    } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
        humanScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        return alert('You win! Scissors beats Paper.');
    }
}

console.log(playRound(humanChoice, computerChoice));

for (let roundNumber = 1; roundNumber < 6; roundNumber++) {
console.log(`Round Number: ${roundNumber}. It is only 5 rounds to play.`);

getComputerChoice(3);
console.log(`Computer choice: ${computerChoice}`);

getHumanChoice();
console.log(`Human choice: ${humanChoice}`);

console.log(playRound(humanChoice, computerChoice));

}

}

playGame();