function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let response = ""
    let keepGoing = true

    while (keepGoing == true) {
        response = prompt("Please enter Rock, Paper, or Scissors:").toLowerCase().trim();

        if (response != "rock" && response != "paper" && response != "scissors") {
            console.log("I'm sorry, that's not an acceptable input. Please try again.");
        } else {
            keepGoing = false;
        }
    }

    return response;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a tie!"
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock."
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors."
        } else {
            return "Something is wrong with computerSelection 1."
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock."
        } else if (computerSelection == "paper") {
            return "It's a tie!"
        } else if (computerSelection == "scissors") {
            return "You lose! Scissors beat Paper."
        } else {
            return "Something is wrong with computerSelection 2."
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors."
        } else if (computerSelection == "paper") {
            return "You win! Scissors beat Paper."
        } else if (computerSelection == "scissors") {
            return "It's a tie!"
        } else {
            return "Something is wrong with computerSelection 3."
        }
    } else {
        return "Something is wrong with playerSelection."
    }
  }

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));