

// Get random Computer Side Choice
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

console.log(getComputerChoice(3));

// Ask user for Human Side Choice

function getHumanChoice () {
       //code 
}


// Calculate result

function playRound () {
    //code
}


// Show result of round and game

// Ask for next round

// Stop game after 5 rounds