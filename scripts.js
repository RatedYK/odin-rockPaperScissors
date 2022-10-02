var playerWins = 0;
var computerWins = 0;
var draw = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) + 1;
    let result;

    if (choice >= 1 && choice <= 33) {
        result = "rock"
    } else if (choice >= 34 && choice <= 66) {
        result = "scissors"
    } else result = "paper"
    return result = result.toLowerCase();
}

function getPlayerChoice() {
    let result = prompt("Rock, Paper or Scissors?", "");
    result = result.toLowerCase();

    if (result === "paper" || result === "rock" || result === "scissors") {
        return result;
    } else
        alert("Error: Try again")
        return getPlayerChoice();
}

function winLose (playerSelection, computerSelection) {
    let rules = {
        rock: "paper",
        scissors: "rock",
        paper: "scissors"
    }

    let result;

    if (playerSelection === computerSelection) {
        result = `Draw! YOU:${playerSelection.toUpperCase()} CPU:${computerSelection.toUpperCase()}`
        draw += 1;
    } else if (computerSelection === rules[playerSelection]) {
        result = `You Lose! YOU:${playerSelection.toUpperCase()} CPU:${computerSelection.toUpperCase()}`
        computerWins += 1;
    } else { result = `You Win! YOU:${playerSelection.toUpperCase()} CPU:${computerSelection.toUpperCase()}` 
        playerWins += 1;
    } return console.log(result);
}

function game() {
    for(let i = 0; i < 5; i++) {
        winLose(getPlayerChoice(),getComputerChoice());
        console.log(`YOU: ${playerWins} CPU: ${computerWins} DRAWS:${draw}`)
    }
    return console.log(`FINAL SCORES: YOU:${playerWins} CPU:${computerWins} DRAWS:${draw}`)
}