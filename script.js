const choices = document.querySelector('.choices');

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.classList.add('rock');
paper.classList.add('paper');
scissors.classList.add('scissors');

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

choices.appendChild(rock);
choices.appendChild(paper);
choices.appendChild(scissors);

choices.addEventListener("click", (event) => {
    let target = event.target;

    if (target.matches('.rock')) {
        console.log('Rock is your weapon!')
    }
    else if (target.matches('.paper')) {
        console.log('Paper is your weapon!')
    }
    else if (target.matches('.scissors')) {
        console.log('Scissors is your weapon!')
    } 
    else {
        return;
    }

    console.log(playRound(humanSelection, computerSelection))
});





    let humanScore = 0; 
    let computerScore = 0; 

    let humanSelection 
    let computerSelection 

    console.log(`Your have ${humanScore}`);
    console.log(`Computer has ${computerScore}`); 

    /* console.log(playRound(humanSelection, computerSelection));
    console.log(playRound(humanSelection, computerSelection));
    console.log(playRound(humanSelection, computerSelection));
    console.log(playRound(humanSelection, computerSelection));
    console.log(playRound(humanSelection, computerSelection)); */

    console.log(`GAME OVER. Refresh to play again. 
                Your final score is  ${humanScore}
                Computer final score is ${computerScore}`); 

    function getComputerChoice() {
        spin = 10 * Math.random()
        if (spin >= 0 && spin < 3.3) {
            let computerChoice = "rock"
            return computerChoice;
        }
        else if (spin >= 3.3 && spin < 6.6) {
            let computerChoice = "paper"
            return computerChoice;
        }
        else if (spin >= 6.6 && spin < 10) {
            let computerChoice = "scissors"
            return computerChoice;
        }
    }

    function getHumanChoice() {
        let userChoice = prompt("Choose your weapon 'rock', 'paper', or 'scissors'!", "rock").toLowerCase();
        return userChoice;
    }

    function playRound(humanChoice, computerChoice) {

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        if (humanSelection == computerSelection){
            return `It is a tie! 
            You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "rock" && computerSelection == "scissors" ) { 
            humanScore += 1;
            return `You win this round! Rock breaks scissors! 
            You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "rock" && computerSelection == "paper" ) { 
            computerScore += 1;
            return `You lose this round! Paper covers rock! 
            You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "paper" && computerSelection == "rock" ) { 
            humanScore += 1;
            return `You win this round! Paper covers rock! 
            You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "paper" && computerSelection == "scissors" ) { 
            computerScore += 1;
            return `You lose this round! Scissors cuts paper! 
            You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "scissors" && computerSelection == "paper" ) { 
            humanScore += 1;
            return `You win this round! Scissors cuts paper! 
            You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
        else if (humanSelection == "scissors" && computerSelection == "rock" ) {
            computerScore += 1; 
            return `You lose this round! Rock breaks scissors! 
            You have ${humanScore} points, your opponent has ${computerScore} points.`;
        }
    }