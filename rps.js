function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

// Should extract Rock, Paper, Scissors
function checkUserInput(userChoice) {
  userChoice = userChoice.toLowerCase();
  userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);
  console.log(userChoice);
}

function determineWinner(userChoice, computerChoice) {
  let winner;

  if (userChoice === computerChoice) {
    console.log("It's a tie! Let's replay the round.");
    playRPS();
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(`You Win! ${userChoice} beats ${computerChoice}`);
    winner = "user";
  } else if (
    (userChoice === "Rock" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Rock")
  ) {
    console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
    winner = "computer";
  }

  return winner;
}

function playRPS() {
  userChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
  userChoice = checkUserInput(userChoice);
  computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

// switch (userChoice === "Rock") {
//   case getComputerChoice === "Rock":
//     console.log("It's a tie!");
//     break;
//   case getComputerChoice === "Paper":
//     console.log("I win!");
//     winner = "computer";
//     break;
//   case getComputerChoice === "Scissors":
//     console.log("You win!");
//     winner = "user";
//     break;
// }
// switch (userChoice === "Paper") {
//   case getComputerChoice === "Rock":
//     console.log("You win!");
//     winner = "user";
//     break;
//   case getComputerChoice === "Paper":
//     console.log("It's a tie!");
//     break;
//   case getComputerChoice === "Scissors":
//     console.log("I win!");
//     winner = "computer";
//     break;
// }

// switch (userChoice === "Scissors") {
//   case getComputerChoice === "Rock":
//     console.log("I win!");
//     winner = "computer";
//     break;
//   case getComputerChoice === "Paper":
//     console.log("You win!");
//     winner = "user";
//     break;
//   case getComputerChoice === "Scissors":
//     console.log("It's a tie!");
//     break;
