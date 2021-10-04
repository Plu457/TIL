const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "images/rsp.png";

$computer.style.background = `url(${IMG_URL}) -464px 0`;
$computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "0",
  rock: "-220px",
  paper: "-440px",
};

let computerChoice = "scissors";
const changeComputerHand = () => {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
};

let intervalId = setInterval(changeComputerHand, 50);

const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

let clickable = true;
let score = 0;
const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    // 점수 계산 및 화면 표시
    const myChoice =
      event.target.textContent === "바위"
        ? "rock"
        : event.target.textContent === "가위"
        ? "scissors"
        : "paper";
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;

    let message;
    if ([2, -1].includes(diff)) {
      score += 1;
      message = "승리";
    } else if ([-2, 1].includes(diff)) {
      score -= 1;
      message = "패배";
    } else {
      message = "무승부";
    }
    $score.textContent = `${message} 총: ${score}점`;
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
};

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
