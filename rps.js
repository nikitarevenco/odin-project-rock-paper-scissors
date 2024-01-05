function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
  let winner;

  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You win!");
    winner = "user";
  } else if (
    (userChoice === "Rock" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Rock")
  ) {
    console.log("I win!");
    winner = "computer";
  }

  return winner;
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

// function playRPS() {
//   userChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
//   computerChoice = getComputerChoice();
//   determineWinner(userChoice, computerChoice);
// }
