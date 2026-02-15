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
    message = 'Rock, paper or scissors?';
    userInput = prompt(message);
    return userInput;
}

function playGame () {

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
            computerScore += 1
            return 'Sorry, you lost :('
        }
        else if (computerChoice === 'rock' && humanChoice === 'paper') {
            humanScore += 1
            return 'You won!'
        }
        else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            computerScore += 1
            return 'Sorry, you lost :('
        }
        else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            humanScore += 1
            return 'You won!'
        }
        else if (computerChoice === 'paper' && humanChoice === 'scissors'){
            humanScore += 1
            return 'You won!'
        }
        else if (computerChoice === 'paper' && humanChoice === 'rock'){
            computerScore += 1
            return 'Sorry, you lost :('
        }
        else {
            return 'not working :('
        }

    }

    playRound()
    playRound()
    playRound()
    

    console.log(computerScore, humanScore)

    if (computerScore > humanScore) {
        return 'You lost :('
    }
    else if (computerScore < humanScore) {
        return 'Congratulations, you won!'
    }
    else {
        return 'It\'s a tie.'
    } 

}

console.log(playGame())