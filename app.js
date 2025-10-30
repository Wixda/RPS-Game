
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerNO = Math.ceil(Math.random() * 3);
    if (computerNO === 1) {
        return "Rock";
    } else if (computerNO === 2) {
        return "Paper";
    } else if (computerNO === 3) {
        return "Scissors";
    } else return null;
}

function getHumanChoice() {
    let humanNo = Number(prompt("Enter a number between 1 to 3"))
    if (humanNo === 1) {
        return "Rock";
    } else if (humanNo === 2) {
        return "Paper";
    } else if (humanNo === 3) {
        return "Scissors";
    } else return null;
}
