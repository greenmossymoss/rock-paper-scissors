

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
        // p.textContent = 'You won this round!'
    }
    else {
        computerScore++;
        // p.textContent = 'The computer won this one :('
    }

    p.textContent = `You: ${humanScore} Computer: ${computerScore}`

}

function playGame() {

    playRound(getComputerChoice(), humanChoice)

    console.log(computerScore, humanScore)
    if ((computerScore === 5) || (humanScore === 5)){
        if (computerScore > humanScore) {
            p.textContent = 'You lost the game :('
        }
        else {
            p.textContent = 'Congratulations, you won the game!'
        }
        // else {
        //     console.log('It\'s a tie.')
        // }
        }
    
}



// const btn = document.querySelector('button')
// // const btnScissors = document.querySelector('#scissors')
// // const btnPaper = document.querySelector('#paper')

// btn.addEventListener('click', () => {
//     alert('you pressed rock!')})

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         alert(button.id);
//     })
// })






