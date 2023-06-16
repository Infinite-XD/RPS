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
