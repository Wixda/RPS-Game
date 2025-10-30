function getComputerChoice() {
    let randomNO = Math.ceil(Math.random() * 3);
    if (randomNO === 1) {
        return "Rock";
    } else if (randomNO === 2) {
        return "Paper";
    } else if (randomNO === 3) {
        return "Scissors";
    } else return null;
}
