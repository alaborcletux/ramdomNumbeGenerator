let computerChoiceDisplay = document.getElementById("Computer-Choice");
let userChoiceDisplay = document.getElementById("Your-Choice");
let resultDisplay = document.getElementById("Result");
let possibleChoices = document.querySelectorAll("button");

let houseChoice = null;
let computerChoice = null;
let result = null;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    houseChoice = e.target.id;
    userChoiceDisplay.innerHTML = houseChoice;
    generateComputerChoice();
    getResult()
  })
);

function generateComputerChoice() {
  let randomNumer = Math.floor(Math.random() * 3); // or you can use possibleChoices.length
  if (randomNumer === 1) {
    computerChoice = "rock";
  }
  if (randomNumer === 2) {
    computerChoice = "Scissor";
  }
  if (randomNumer === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === houseChoice) {
    result = "its a draw";
  }
  if (computerChoice === "rock" && houseChoice === "paper") {
    result = "you lost";
  }
  if (computerChoice === "rock" && houseChoice === "scisoors") {
    result = "you lost";
  }
  if (computerChoice === "paper" && houseChoice === "scisoors") {
    result = "you win";
  }
  if (computerChoice === "paper" && houseChoice === "rock") {
    result = "you lost";
  }
  if (computerChoice === "rock" && houseChoice === "scissors") {
    result = "you win";
  }
  if (computerChoice === "scisoors" && houseChoice === "paper") {
    result = "you lost";
  }
  resultDisplay.innerHTML = result;
}




