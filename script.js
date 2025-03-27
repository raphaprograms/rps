const choices = document.querySelector(".choices");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.classList.add("rock");
paper.classList.add("paper");
rock.classList.add("scissors");

rock.textContent = "Rock 🪨";
paper.textContent = "Paper 📰";
scissors.textContent = "Scissors ✂️"

choices.appendChild(rock);
choices.appendChild(paper);
choices.appendChild(scissors);




playGame();

function playGame() {

    let humanScore = 0; 
    let computerScore = 0; 

    let humanSelection 
    let computerSelection 

    console.log(`Your have ${humanScore}`);
    console.log(`Computer has ${computerScore}`); 

    /* console.log(playRound(humanSelection, computerSelection)); */
 

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

    function getHumanChoice(event) {
            let target = event.target;
        
            switch(target.class) {
                case 'rock':
                    console.log('You chose ROCK!');
                    playRound('rock', computerSelection);
                    break;
                case 'paper':
                    console.log('You chose PAPER!');
                    playRound('paper', computerSelection);
                    break;
                case 'scissors':
                    console.log('You chose SCISSORS!');
                    playRound('scissors', computerSelection);
                    break;
            }
        }
    }

    choices.addEventListener("click", function(event) {
        let target = event.target;
    
        switch(target.class) {
            case 'rock':
                console.log('You chose ROCK!');
                playRound('rock', computerSelection);
                break;
            case 'paper':
                console.log('You chose PAPER!');
                playRound('rock', computerSelection);
                break;
            case 'scissors':
                console.log('You chose SCISSORS!');
                playRound('rock', computerSelection);
                break;
        }
    })

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
}