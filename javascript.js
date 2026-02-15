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

        if (computerChoice === humanChoice){
            console.log('This round is a tie')
        }
        
        else if (computerChoice === 'rock' && humanChoice === 'paper'||
                 computerChoice === 'scissors' && humanChoice === 'rock' ||
                 computerChoice === 'paper' && humanChoice === 'scissors'){
            humanScore += 1
            console.log('This round is a win for you!')
        }
        else {
            computerScore++;
            console.log('The computer won this one :(')
        }

    }

    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    
    console.log(computerScore, humanScore)

    if (computerScore > humanScore) {
        console.log( 'You lost the game :(')
    }
    else if (computerScore < humanScore) {
        console.log ('Congratulations, you won the game!') 
    }
    else {
        console.log('It\'s a tie.') 
    } 
}

playGame()