


/*
// return computer choice
function getComputerChoice() {
    choice = Math.random(); // assign choice to random number between 0-1
    if(choice <= 0.3){return "rock"};
    if(choice <= 0.6){return "paper"};
    if(choice <= 1){ return"scissors"};
}

//return human choice
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors"); //get user choice
    choice = choice.toLowerCase();
    
    // validate human choice

    if(choice === 'rock'){return 'rock'};
    if(choice === 'paper'){return 'paper'};
    if(choice === 'scissors'){return 'scissors'};
    
    alert("error, try again.");
    choice = getHumanChoice();
    return choice;
}

// convert choice to number for moduler math
function convertChoiceToNum(choice){
    if(choice === 'rock'){return 0};
    if(choice === 'paper'){return 1};
    if(choice === 'scissors'){return 2};
}
// Play round of games. Use moduler math to determine winner.
function playRound(humanChoice,computerChoice){
    let compare = convertChoiceToNum(humanChoice) - convertChoiceToNum(computerChoice) + 3;
    if(compare % 3 === 0) {console.log("Its a tie!");}
    else if(compare % 3 === 1) {console.log(`Human Wins! ${humanChoice} beats ${computerChoice}`); humanScore++;}
    else if(compare % 3 === 2) {console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`); ComputerScore++;}
}

// play 5 rounds of rock paper scissors
function playGame(){
    humanScore = 0;
    ComputerScore = 0;

    for(let i = 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    let winner;
    if(ComputerScore < humanScore){winner = "Human";}
    else {winner = "Computer";}
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${ComputerScore}`);
    console.log(`${winner} wins the game! Yay!`);

}

playGame();
*/
function beginGame(){
    let startMenu = document.querySelector(".start-screen");
    let game = document.querySelector('.game');
    startMenu.classList.toggle('hidden');
    game.classList.toggle('hidden');
}

let startButton = document.querySelector(".start-button");
startButton.addEventListener('click', beginGame);

