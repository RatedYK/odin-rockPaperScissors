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

//plays one round of RoShamBo and updates the scores
function playRound (playerSelection) {
    let rules = {
        rock: "paper",
        scissors: "rock",
        paper: "scissors"
    } //defines rules of the game

    let computerSelection = getComputerChoice(); //get the computers choice

    if (playerSelection === computerSelection) {
        condition.textContent = 'Draw!';
        condition.style.cssText = "color: lightgrey";
        result.textContent = `YOU:  ${playerSelection.toUpperCase()}         CPU:  ${computerSelection.toUpperCase()}`
        draw += 1;
    } else if (computerSelection === rules[playerSelection]) {
        condition.textContent = 'You Lose!'
        condition.style.cssText = "color: rgb(212, 7, 0)";
        result.textContent = `YOU:  ${playerSelection.toUpperCase()}         CPU:  ${computerSelection.toUpperCase()}`
        computerWins += 1;
        computerScore.textContent = `CPU: ${computerWins}`
    } else { 
        condition.textContent = 'You Win!';
        condition.style.cssText = "color: rgb(124, 200, 218)";
        result.textContent = `YOU:  ${playerSelection.toUpperCase()}          CPU:  ${computerSelection.toUpperCase()}` 
        playerWins += 1;
        playerScore.textContent = `Player: ${playerWins}`
    } return console.log(result);
}

const buttons = document.querySelectorAll('input');

buttons.forEach(button => button.addEventListener('click', (choice) => {
    playRound(choice.target.value)})
) //adds button event for rock, paper and scissors.

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const result = document.querySelector('#result');
const condition = document.querySelector('#condition');
