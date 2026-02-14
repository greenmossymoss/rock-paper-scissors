function getComputerChoice () {
    num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            return "rock";
            
        case 1:
            return "paper";
            
        case 2:
            return "scissors";
            
    } 
}

function getHumanChoice() {
    message = 'what do you choose?';
    userInput = prompt(message);
    return userInput;
}

// console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound (computerChoice, humanChoice) {

    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice().toLowerCase()

    console.log(computerChoice, humanChoice) 

    if (computerChoice === humanChoice) {
        return 'it\'s a tie'
    }
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        return 'Sorry, you lost :('
    }
    else if (computerChoice === 'rock' && humanChoice === 'paper') {
        return 'You won!'
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        return 'Sorry, you lost :('
    }
    else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        return 'You won!'
    }
    else if (computerChoice === 'paper' && humanChoice === 'scissors'){
        return 'You won!'
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock')
        return 'Sorry, you lost :('
    else {
        return 'not working :('
    }
}

console.log(playRound())