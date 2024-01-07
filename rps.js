function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

let mainPara = document.querySelector(".output");

function determineWinner(userChoice, computerChoice) {
  let winner;

  if (userChoice === computerChoice) {
    mainPara.textContent = "It's a tie! Let's replay the round.";
    playRPS();
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    mainPara.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    winner = "user";
  } else if (
    (userChoice === "Rock" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Rock")
  ) {
    mainPara.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    winner = "computer";
  }

  return winner;
}

function playRPS(userChoice) {
  computerChoice = getComputerChoice();
  return determineWinner(userChoice, computerChoice);
}

let buttonContainer = document.querySelector(".buttons");

let startGameButton = document.querySelector(".start-game");

let title = document.querySelector(".title");

startGameButton.addEventListener("click", () => {
  buttonContainer.classList.toggle("toggle-display");
  startGameButton.classList.toggle("toggle-display");
  title.textContent = "You go first!";
  mainPara.textContent = "";
});

computer_score = 0;
user_score = 0;

document.querySelector(".rock").addEventListener("click", function () {
  if (addScore() < 5) {
    const total_score = addScore(playRPS("Rock"));
    title.textContent = `🤖: ${computer_score} 🫵: ${user_score}`;
  } else {
    determineFinalWinner();
  }
  // Adds +1 score to the computer or user
});

document.querySelector(".paper").addEventListener("click", function () {
  if (addScore() < 5) {
    const total_score = addScore(playRPS("Paper"));
    title.textContent = `🤖: ${computer_score} 🫵: ${user_score}`;
  } else {
    determineFinalWinner();
  }
  // Adds +1 score to the computer or user
});

document.querySelector(".scissors").addEventListener("click", function () {
  if (addScore() < 5) {
    const total_score = addScore(playRPS("Scissors"));
    title.textContent = `🤖: ${computer_score} 🫵: ${user_score}`;
  } else {
    determineFinalWinner();
  }
  // Adds +1 score to the computer or user
});

function addScore(winner) {
  if (winner === "computer") {
    ++computer_score;
  } else if (winner === "user") {
    ++user_score;
  }

  return computer_score + user_score;
}

// function game(numberOfGames) {
//   for (let i = 0; i < numberOfGames; i++) {
//     mainPara.textContent = "What do you choose?";

restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", function () {
  computer_score = 0;
  user_score = 0;
  restartButton.classList.toggle("toggle-display");
  startGameButton.classList.toggle("toggle-display");
  mainPara.textContent = "Let's play rock paper scissors! (Again)";
  title.textContent = "Rock, Paper, Scissors";
});

function determineFinalWinner() {
  if (computer_score > user_score) {
    mainPara.textContent = `I win! My score: ${computer_score} Your score: ${user_score}`;
  } else if (computer_score < user_score) {
    mainPara.textContent = `You win! My score: ${computer_score} Your score: ${user_score}`;
  } else {
    mainPara.textContent = `It's a tie! We both have ${computer_score} score`;
  }
  buttonContainer.classList.toggle("toggle-display");
  restartButton.classList.toggle("toggle-display");
}
