
function getComputerChoice() {
    spin = 10 * Math.random()
    if (spin >= 0 && spin < 3.3) {
        return "rock"
    }
    else if (spin >= 3.3 && spin < 6.6) {
        return "paper"
    }
    else if (spin >= 6.6 && spin < 10) {
        return "scissors"
    }
}
/*console.log(getComputerChoice());*/

function getHumanChoice() {
    let userChoice = prompt("Choose your weapon 'rock', 'paper', or 'scissors'!", "rock/paper/scissors");
    return userChoice;
}
/*console.log(getHumanChoice());*/

let humanScore = 0; 
let computerScore = 0;

function playGame() {
let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice();



/* console.log(humanScore);
console.log(computerScore); */

    function playRound (humanChoice, computerChoice) {

        if (humanSelection == computerSelection){
            return `It is a tie! You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "rock" && computerSelection == "scissors" ) { 
            humanScore += 1;
            return `You win this round! Rock breaks scissors! You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "rock" && computerSelection == "paper" ) { 
            computerScore += 1;
            return `You lose this round! Paper covers rock! You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "paper" && computerSelection == "rock" ) { 
            humanScore += 1;
            return `You win this round! Paper covers rock! You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "paper" && computerSelection == "scissors" ) { 
            computerScore += 1;
            return `You lose this round! Scissors cuts paper! You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "scissors" && computerSelection == "paper" ) { 
            humanScore += 1;
            return `You win this round! Scissors cuts paper! You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "scissors" && computerSelection == "rock" ) {
            computerScore += 1; 
            return `You lose this round! Rock breaks scissors! You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
    }
}