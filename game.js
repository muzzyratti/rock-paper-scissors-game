

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

    if (humanChoice === 'rock'|| humanChoice === 'paper'|| humanChoice === 'rock') {
        return humanChoice = String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1);
    } else {
        alert ("Please choose only from: rock, paper or scissors.");
        getHumanChoice();
    }
}

getHumanChoice();
console.log(`Human choice: ${humanChoice}`);

// Calculate result

function playRound () {
    //code
}


// Show result of round and game

// Ask for next round

// Stop game after 5 rounds