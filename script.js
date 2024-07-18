let getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
};

let getHumanChoice = () => {
    let humanChoice = prompt(`Do you choose rock, paper, or scissors? Please enter your choice below:`).toLowerCase();
    while(!(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors')) {
        humanChoice = prompt(`You did not enter a valid choice. Please enter rock, paper, or scissors below:`).toLowerCase();
    }
    return humanChoice;
};

function playRound(humanChoice, computerChoice) {
    if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if((computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'scissors' && humanChoice === 'paper')) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore;
    } else {
        console.log(`It is a tie! ${humanChoice} is the same as ${computerChoice}.`);
    }
};

let humanScore = 0, computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);