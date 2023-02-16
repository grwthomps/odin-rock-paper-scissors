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

function game() {
    console.log("Hello, Human. Welcome to your daily survival game of Rock, Paper, Scissors. As you know, the rules and stakes are simple. We will each select 'Rock', 'Paper', 'Scissors'. Rock beats Scissors, Paper beats Rock, and Scissors beat Paper. We will play best out of 5 rounds. If you win, you receive the best gift of all: Life! If you lose, you will die. But the good news is you will no longer have to play this game every single day! Let's begin...");

    let computerScore = 0
    let playerScore = 0
    let keepGoing = true

    while (keepGoing == true) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result.includes("win")) {
            playerScore++
        } else if (result.includes("lose")) {
            computerScore++
        } else if (result.includes("tie")) {
        } else {
            console.log("Something is wrong with the result of playRound.")
            keepGoing = false
        }

        console.log(result);
        console.log(`Computer: ${computerScore}`)
        console.log(`You: ${playerScore}`)

        if (playerScore < 3 && computerScore < 3) {
        } else if (playerScore >= 3 || computerScore >= 3) {
            if (playerScore < computerScore) {
                console.log(`Sorry, you have lost. The Computer will now consume you. Goodbye.`);
                keepGoing = false
            } else if (playerScore > computerScore) {
                console.log(`Congratulations, you have won! Your life will be spared...for now.`);
                keepGoing = false
            } else if (playerScore == computerScore) {
                console.log("There has been a tie, which should be impossible. The final score is...");
                console.log(`Computer: ${computerScore}`);
                console.log(`You: ${playerScore}`);
                console.log("Therefore, you have cheated and will be consumed by the Computer. Goodbye.");
                keepGoing = false
            } else {
                console.log("Something is wrong with the scores. The current tally is...");
                console.log(`Computer: ${computerScore}`);
                console.log(`You: ${playerScore}`);
                keepGoing = false
            }
        } else {
            console.log("Something is wrong with the scores. The current tally is...");
            console.log(`Computer: ${computerScore}`);
            console.log(`You: ${playerScore}`);
            keepGoing = false
        }
    }

    console.log("To play again, refresh the page.");
}

game();