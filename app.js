const score = document.querySelector("#score");
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const rockBtn = document.querySelector('#rock');

let currentScore = 0;
score.textContent = currentScore;

function addScore (){
    currentScore++;
    score.textContent = currentScore;
}

function reduceScore (){
    currentScore--;
    score.textContent = currentScore
}

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

function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie")
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            reduceScore();
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            reduceScore();
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            reduceScore();
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            addScore();
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            addScore();
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            addScore();
        }
    }

paperBtn.addEventListener("click", ()=> {
    let computerPick = getComputerChoice();
    playRound('paper', computerPick);
});

rockBtn.addEventListener("click", ()=> {
    let computerPick = getComputerChoice();
    playRound('rock', computerPick);
});
scissorsBtn.addEventListener("click", ()=> {
    let computerPick = getComputerChoice();
    playRound('rock', computerPick);
});
