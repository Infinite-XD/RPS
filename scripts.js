function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);
    if (x==1) {
        return "rock"
    }
    else if (x==2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(computerChoice, playerChoice) {
    let player = playerChoice.toLowerCase();
    if (player==computerChoice) {
        return "Draw"
    }
    else if ((player=="rock" && computerChoice=="paper") || (player=="paper" && computerChoice=="scissors") || (player=="scissors" && computerChoice=="rock")) {
        return "You win"
    }
    else if ((player=="paper" && computerChoice=="rock") || (player=="rock" && computerChoice=="scissors") || (player=="scissors" && computerChoice=="paper")) {
        return "You loseeeee, loserrrr!"
    }
}

function game() {
    const playerSelection = prompt("Rock, paper or scissors?")
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

game()
