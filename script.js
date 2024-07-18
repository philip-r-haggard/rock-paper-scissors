let getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
};

let getHumanChoice = () => {
    let humanChoice = prompt("Do you choose rock, paper, or scissors? Please enter your choice below:").toLowerCase();
    while(!(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors')) {
        humanChoice = prompt("You did not enter a valid choice. Please enter rock, paper, or scissors below:").toLowerCase();
    }
    return humanChoice;
};

let humanScore = 0, computerScore = 0;