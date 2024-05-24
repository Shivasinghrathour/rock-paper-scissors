let choices = document.querySelectorAll(".choice");

let userPoint = 0;
let comPoint = 0;
let res = "You WIn";

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
const GenrateCompChoice = function () {
  let option = ["paper", "rock", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return option[idx];
};

const playGame = function (userChoice) {
  let compChoice = GenrateCompChoice();
  if (userChoice === compChoice) {
    //draw
    draw();
  } else {
    let userWIn = true;
    if (userChoice === "rock") {
      userWIn = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWIn = compChoice === "scissors" ? false : true;
    } else {
      userWIn = compChoice === "rock" ? false : true;
    }

    showWinner(userWIn);
  }
  
};
const draw = function () {
    res = "Draw";
    let result = document.querySelector(".result");
    result.textContent = res;
};

const showWinner = function (userWIn) {
  if (userWIn) {
    userPoint++;
    let myScore = document.querySelector("#my-score");
    myScore.textContent = userPoint;
    res = "You Win";
    let result = document.querySelector(".result");
    result.textContent = res;
  }  else {
    comPoint++;

    let compScore = document.querySelector("#comp-score");
    compScore.textContent = comPoint;
    res = "You Lose";
    let result = document.querySelector(".result");
    result.textContent = res;
    // comPoint.textContent = comPoint;
  }
};
