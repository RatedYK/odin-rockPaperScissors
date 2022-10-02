function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) + 1;
    let result;

    if (choice >= 1 && choice <= 33) {
        result = "rock"
    } else if (choice >= 34 && choice <= 66) {
        result = "scissors"
    } else result = "paper"
    return choice = choice.toLowerCase();
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Sciccors?", "");

    if (typeof choice === "number") {
        alert("Error: Try again")
        getPlayerChoice();
    } else
    return choice = choice.toLowerCase();
}

getComputerChoice();

let rules = {
    rock: "paper",
    scissors: "rock",
    paper: "scissors"
}

function winLose (playerSelection, computerSelection) {
}