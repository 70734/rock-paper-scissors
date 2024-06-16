let humanScore = 0;
let computerScore = 0;
// return computer choice
function getComputerChoice() {
    choice = Math.random(); // assign choice to random number between 0-1
    if(choice <= 0.3){return "rock"};
    if(choice <= 0.6){return "paper"};
    if(choice <= 1){ return"scissors"};
}


// convert choice to number for moduler math
function convertChoiceToNum(choice){
    if(choice === 'rock'){return 0};
    if(choice === 'paper'){return 1};
    if(choice === 'scissors'){return 2};
}

function winGame() {
    let winner;
    if(computerScore < humanScore){winner = "Human";}
    else {winner = "Computer";}
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log(`${winner} wins the game! Yay!`);
}
// Play round of games. Use moduler math to determine winner.
function playRound(humanChoice,computerChoice){
    let compare = convertChoiceToNum(humanChoice) - convertChoiceToNum(computerChoice) + 3;
    if(compare % 3 === 0) {console.log("Its a tie!");}
    else if(compare % 3 === 1) {console.log(`Human Wins! ${humanChoice} beats ${computerChoice}`); humanScore++;}
    else if(compare % 3 === 2) {console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`); computerScore++;}
    if(computerScore >= 5 || humanScore >= 5){
       winGame()}
    }

function beginGame(){
    let startMenu = document.querySelector(".start-screen");
    let game = document.querySelector('.game');
    startMenu.classList.toggle('hidden');
    game.classList.toggle('hidden');
    
}

let startButton = document.querySelector(".start-button");
startButton.addEventListener('click', beginGame);

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", function() {playRound('rock', getComputerChoice());});
paper.addEventListener("click", function() {playRound('paper', getComputerChoice());});
scissors.addEventListener("click", function() {playRound('scissors', getComputerChoice());});