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
        return "draw"
    }
    else if ((player=="rock" && computerChoice=="paper") || (player=="paper" && computerChoice=="scissors") || (player=="scissors" && computerChoice=="rock")) {
        return true
    }
    else if ((player=="paper" && computerChoice=="rock") || (player=="rock" && computerChoice=="scissors") || (player=="scissors" && computerChoice=="paper")) {
        return false
    }
}

function game(e) {
    const playerSelection = this.classList.value;
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    const result = playRound(playerSelection, computerSelection)
    update(result)
    checkScore()
}

function update(result) {
    if (result && !(result=="draw")) {playerScore += 1}
    else if (!(result) && !(result=="draw")) {computerScore += 1}
    score.textContent = `Player Score: ${playerScore} || Computer Score: ${computerScore}`;
}

function reset () {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `Player Score: ${playerScore} || Computer Score: ${computerScore}`;
    const di = document.querySelector(".end div");
    const but = document.querySelector(".end button");
    end.removeChild(di)
}

function checkScore() {
    if (playerScore == 5 || computerScore == 5) {
    const di = document.createElement("div");
    const but = document.createElement("button");
    const para = document.createElement("h4");
    but.textContent = "Reset."
    if (playerScore == 5) {
        para.textContent = "You win!"
    }
    else if (computerScore == 5) {
        para.textContent = "You lose!"
    }
    but.addEventListener('click', reset)
    end.appendChild(di)
    di.appendChild(but)
    di.appendChild(para)
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
 }
}


let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choices div');
let score = document.querySelector(".score h3");
const end = document.querySelector(".end")
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

choices.forEach((choice) => {choice.addEventListener('click', game)});


