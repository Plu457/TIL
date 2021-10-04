const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
const shuffle = [];

while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle);

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];

console.log(winBalls, bonus);

const $result = document.querySelector("#result");

const drawBall = (number, $parent) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $parent.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}

const $bonus = document.querySelector("#bonus");
setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);