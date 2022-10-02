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
    let result = prompt("Rock, Paper or Sciccors?", "");

    if (typeof result === "number") {
        alert("Error: Try again")
        getPlayerChoice();
    } else
    return result = result.toLowerCase();
}

getComputerChoice();

let rules = {
    rock: "paper",
    scissors: "rock",
    paper: "scissors"
}

function winLose (playerSelection, computerSelection) {
    let rules = {
        rock: "paper",
        scissors: "rock",
        paper: "scissors"
    }
    let result;

    if (playerSelection === computerSelection) {
        result = "Draw!"
    } else if (computerSelection === rules[playerSelection]) {
        result = "You Win!"
    } else result = "You Lose!"
    return result;
}