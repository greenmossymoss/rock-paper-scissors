console.log("Hello World!")

function getComputerChoice () {
    num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    } 
}

console.log(getComputerChoice())

function getHumanChoice() {
    message = 'what do you choose?';
    userInput = prompt(message);
    return userInput;
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0