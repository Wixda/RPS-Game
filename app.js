

function getComputerChoice() {
    let computerNO = Math.ceil(Math.random() * 3);
    if (computerNO === 1) {
        return "rock";
    } else if (computerNO === 2) {
        return "paper";
    } else if (computerNO === 3) {
        return "scissors";
    } else return null;
}

function getHumanChoice() {
    let humanNo = Number(prompt("Enter a number between 1 to 3"))
    if (humanNo === 1) {
        return "rock";
    } else if (humanNo === 2) {
        return "paper";
    } else if (humanNo === 3) {
        return "scissors";
    } else return null;
}






function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie")
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++
            console.log("You lose!!! The computer wins")
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++
            console.log("You lose!!! The computer wins")
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++
            console.log("You lose!!! The computer wins")
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++
            console.log("Congrats! You won")
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++
            console.log("Congrats! You won")
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++
            console.log("Congrats! You won")
        }
    }
    
    
    for (let i = 0; i < 5; i++){
        const humanAnswer = getHumanChoice();
        const computerAnswer = getComputerChoice();
        playRound(humanAnswer, computerAnswer);
    }
    
    console.log(`You: ${humanScore} || Computer: ${computerScore}`);
}

playGame();