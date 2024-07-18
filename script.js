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
    } else if((computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'scissors' && humanChoice === 'paper')) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log(`It is a tie! ${humanChoice} is the same as ${computerChoice}.`);
    }
}

const body = document.getElementsByTagName("BODY")[0];

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click", () => {
    playRound(rock.textContent.toLowerCase(), getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound(paper.textContent.toLowerCase(), getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound(scissors.textContent.toLowerCase(), getComputerChoice());
});