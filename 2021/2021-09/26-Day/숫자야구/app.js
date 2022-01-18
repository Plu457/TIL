const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = [];
for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}

// 0 <= Math.random() < 1
const answer = [];
for (let n = 0; n <= 3; n += 1) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
const checkInput = (input) => {
  if (input.length !== 4) return alert("4자리 숫자를 입력해 주세요.");
  if (new Set(input).size !== 4) return alert("중복되지 않게 입력해 주세요");
  // new Set() -> 알아서 중복 제거 ex) 3144 -> 314
  if (tries.includes(input)) return alert("이미 시도한 값입니다.");
  // includes -> 배열(tries)에 input 값이 있는지 확인
  return true;
};

let out = 0;

const defeated = () => {
  $logs.append(`패배! 정답은 ${answer.join("")}`);
};

$form.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 동작 막기
  const value = $input.value;
  $input.value = "";
  if (!checkInput(value)) {
    return;
  }
  // 입력값 문제 없음
  if (answer.join("") === value) {
    $logs.textContent = "홈런!";
    return;
  }
  if (tries.length >= 9) {
    defeated();
    return;
  }
  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      // 일치하는 숫자 발견
      if (index === i) {
        // 자릿수도 같음
        strike += 1;
      } else {
        //숫자만 같음
        ball += 1;
      }
    }
  }
  if (strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value}:아웃`, document.createElement("br"));
  } else {
    $logs.append(
      `${value}: ${strike} 스트라이트 ${ball} 볼`,
      document.createElement("br")
    );
  }
  if (out === 3) {
    defeated();
    return;
  }
  tries.push(value);
});
