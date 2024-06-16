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
    alert(`
    Human: ${humanScore}
    computer ${computerScore}
    ${winner} wins the game! Yay!`)

    location.reload();
}


// Play round of games. Use moduler math to determine winner.
function playRound(humanChoice,computerChoice){
    let compare = convertChoiceToNum(humanChoice) - convertChoiceToNum(computerChoice) + 3;
    let scoreHuman = document.querySelector('.score-human');
    let scoreComputer = document.querySelector('.score-computer');
    let playerChoiceImg = document.querySelector('.human-choice');
    let computerChoiceImg = document.querySelector('.computer-choice');

    
    playerChoiceImg.setAttribute('src', './img/' + humanChoice + '.jpg' ); // set src to show what human picked
    computerChoiceImg.setAttribute('src', './img/' + computerChoice + '.jpg'); // set src to show what computer picked 

    let roundHistory = document.querySelector(".round-history"); // where the winner of each round will be posted
    if(compare % 3 === 0) {
        let round = roundHistory.appendChild(document.createElement('div')); //create new div element child to round-history
        round.textContent = "It is a tie"; // add text outputing round outcome
    }

    else if(compare % 3 === 1) {
        console.log(`Human Wins! ${humanChoice} beats ${computerChoice}`);
        let round = roundHistory.appendChild(document.createElement('div')); //create new div element child to round-history
        round.textContent = `Human Wins: ${humanChoice} beats ${computerChoice}`; // add text outputing round outcome
        humanScore++;


    }


    else if(compare % 3 === 2) {
        console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
        let round = roundHistory.appendChild(document.createElement('div')); //create new div element child to round-history
        round.textContent = `Computer Wins: ${computerChoice} beats ${humanChoice}`; // add text outputing round outcome
        computerScore++;
    }

    scoreComputer.textContent = `Computer: ${computerScore}`; // update computer score on page
    scoreHuman.textContent = `Human: ${humanScore}`; // update human score on page

    if(computerScore >= 5 || humanScore >= 5){
       winGame()}
    }

function beginGame(){
    let startMenu = document.querySelector(".start-screen");
    let game = document.querySelector('.game');
    let roundHistory = document.querySelector(".round-history");
    startMenu.classList.toggle('hidden');
    game.classList.toggle('hidden');
    roundHistory.classList.toggle('hidden');
    
}
function initPage(){
    let startButton = document.querySelector(".start-button");
    startButton.addEventListener('click', beginGame);

    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", function() {playRound('rock', getComputerChoice());});
    paper.addEventListener("click", function() {playRound('paper', getComputerChoice());});
    scissors.addEventListener("click", function() {playRound('scissors', getComputerChoice());});
}

initPage();