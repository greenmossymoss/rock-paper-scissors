let computerChoice = getComputerChoice()
// let humanChoice = getHumanChoice().toLowerCase()

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

// function getHumanChoice() {
//     message = 'Rock, paper or scissors?';
//     userInput = prompt(message);
//     return userInput;
// }

let humanScore = 0
let computerScore = 0



function playRound(computerChoice, humanChoice) {

    

    console.log(computerChoice, humanChoice)

    if (computerChoice === humanChoice) {
        console.log('This round is a tie')
    }

    else if (computerChoice === 'rock' && humanChoice === 'paper' ||
        computerChoice === 'scissors' && humanChoice === 'rock' ||
        computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore += 1
        console.log('This round is a win for you!')
    }
    else {
        computerScore++;
        console.log('The computer won this one :(')
    }

}

function playGame() {



    console.log(computerScore, humanScore)

    if (computerScore > humanScore) {
        console.log('You lost the game :(')
    }
    else if (computerScore < humanScore) {
        console.log('Congratulations, you won the game!')
    }
    else {
        console.log('It\'s a tie.')
    }

}

playGame()

const wrapper = document.querySelector('#wrapper');
    wrapper.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                alert('rock')
                break;
            case 'scissors':
                alert('scissors')
                break;
            case 'paper':
                alert('paper')
                break;
        }

    })

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






