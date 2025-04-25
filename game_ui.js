//Define staring scores
let playerScore = 0;
let computerScore = 0;
let round = 0;

//Define pseudo-random computer choice
const computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

//Running 1 round
function playRound (playerSelection) {
    if (round >= 5) return;

    const computerSelection = getComputerChoice();
    const result = roundResult (playerSelection, computerSelection);
    
    updateScore(result);

    document.getElementById("round-result").innerHTML =
        `Round ${round + 1}: You chose <b>${playerSelection}</b>, computer chose <b>${computerSelection}</b>. <br><strong>${result}</strong>`;

    document.getElementById("scoreboard").innerHTML =
        `Score — You: ${playerScore}, Computer: ${computerScore}`;

    round++;

    if (round >= 5) {
        endGame();
    }
}

//Define round results
function roundResult (player, computer) {
    if (player === computer) return "It's a draw!";
    if (
        (player === "Rock" && computer == "Scissors") ||
        (player === "Scissors" && computer == "Paper") ||
        (player === "Paper" && computer == "Rock")
    ) {
        return "You win this round!";
    } else {
        return "Computer wins this round!";
    }
}

//Updates player and computer score based on round results
function updateScore(result) {
    if (result.includes("You win")) playerScore++;
    else if (result.includes("Computer wins")) computerScore++;
}

//Showing final results and offering to play again
function endGame () {
    let finalText = "";
    if (playerScore > computerScore) {
        finalText = "🎉 You won the game!";
    } else if (playerScore < computerScore) {
        finalText = "😞 Computer won the game!";
    } else {
        finalText = "🤝 It's a draw!";
    }

    document.getElementById("final-result").innerHTML =
        `
        <h2>Game over</h2>
        <p>${finalText}</p>
        <button id="play-again">Play again</button>
        `;

    document.querySelectorAll("button[data-choice]").forEach(btn => btn.disabled = true);

    document.getElementById("play-again").addEventListener("click", resetGame);
}

// Reseting all vars and texts for playing again
function resetGame () {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    document.getElementById("scoreboard").innerHTML = "Score — You: 0, Computer: 0";
    document.getElementById("round-result").innerHTML = "";
    document.getElementById("final-result").innerHTML = "";

    document.querySelectorAll("button[data-choice]").forEach(btn => btn.disabled = false);
}

//Listening any button click to run new round
document.querySelectorAll("button[data-choice]").forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.choice);
    });
});