function getComputerChoice() {
    let result = Math.random() * 3;
    if(result >= 0 && result <= 1) {
        return "rock";
    } else if(result > 1 && result <= 2) {
        return "paper";
    } else if(result > 2 && result <= 3) {
        return "scissor";
    }
}

function getHumanChoice() {
    let result = prompt("Type either rock, paper or scissor: ");
    result = result.toLowerCase();
    if(result == "rock" || result == "paper" || result == "scissor") {
        return result;
    } else {
        alert("Choice not supported. Please, choose again, between rock, paper or scissor")
        return getHumanChoice();
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    console.log(`Player choose: ${player}\nComputer choose: ${computer}`);
    if(computer == player) {
        console.log("No one won, it's a draw! :(");
    } else if(computer == "rock" && player == "scissor" || computer == "paper" && player == "rock" || computer == "scissor" && player == "paper") {
        computerScore += 1;
        console.log(`You lose! ${computer} beats ${player}`);
    } else {
        playerScore += 1;
        console.log(`You won! ${player} beats ${computer}`);
    }
    printScores();
}

function playGame() {
    let numberOfRounds = 5;
    for(let i = 0; i < numberOfRounds; i++) {
        let computer = getComputerChoice();
        let player = getHumanChoice();
        playRound(player, computer);
    }
    printFinalScores();
}

function printScores() {
    console.log("====================");
    console.log("SCORES");
    console.log(`Player: ${playerScore} points`);
    console.log(`Computer: ${computerScore} points`);
    console.log("====================");
}

function printFinalScores() {
    console.log("======================");
    console.log(`Final scores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    console.log("======================");
    if(playerScore > computerScore) {
        console.log("PLAYER WON THE GAME!");
    } else if(playerScore < computerScore) {
        console.log("COMPUTER WON THE GAME!");
    } else {
        console.log("ITS A DRAW");
    }
}

playGame();