

function getComputerChoice() {
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

let humanScore = 0
let computerScore = 0

const wrapper = document.querySelector('#wrapper');
    wrapper.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                humanChoice = 'rock'
                break;
            case 'scissors':
                humanChoice = 'scissors'
                break;
            case 'paper':
                humanChoice = 'paper'
                break;
        }
        playGame()
    })

const div = document.createElement('div');
const p = document.createElement('p')

wrapper.appendChild(div)
div.appendChild(p)

function playRound(computerChoice, humanChoice) {

    console.log(computerChoice, humanChoice)

    if (computerChoice === humanChoice) {
        // p.textContent = 'This round is a tie.'
    }

    else if (computerChoice === 'rock' && humanChoice === 'paper' ||
        computerChoice === 'scissors' && humanChoice === 'rock' ||
        computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore++
    }
    else {
        computerScore++;
    }

    p.textContent = `You: ${humanScore} Computer: ${computerScore}`

}

const result = document.createElement('p')

const btn = document.createElement('button')
const buttonHolder = document.querySelector('#buttonHolder')

function playGame() {

    playRound(getComputerChoice(), humanChoice)

    console.log(computerScore, humanScore)
    if ((computerScore === 5) || (humanScore === 5)){
        if (computerScore > humanScore) {
            result.textContent = 'You lost the game :('
        }
        else {
            result.textContent = 'Congratulations, you won the game!'
        }
        div.appendChild(result)
        btn.textContent = 'New game'
        buttonHolder.appendChild(btn)
        }
}



btn.addEventListener('click', () => {
    computerScore = 0
    humanScore = 0
    buttonHolder.removeChild(btn)
    div.removeChild(result)
    p.textContent = `You: ${humanScore} Computer: ${computerScore}`
})