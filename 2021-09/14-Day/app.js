const number = Number(prompt("몇명이 참가하나요?"), 10);
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word;
let newWord;

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    alert("올바르지 않은 단어입니다.");
  }
  $input.value = "";
  $input.focus();
};

const onInput = (e) => {
  newWord = e.target.value;
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);

// const number = Number(prompt("몇명이 참가하나요?"));
// const $button = document.querySelector("button");
// const $input = document.querySelector("input");
// const $word = document.querySelector("#word");
// const $order = document.querySelector("#order");
// let word;
// let newWord;

// const onClickButton = () => {
//   if (!word) {
//     word = newWord;
//     $word.textContent = word;
//     const order = Number($order.textContent);
//     if (order + 1 > number) {
//       $order.textContent = 1;
//     } else {
//       $order.textContent = order + 1;
//     }
//     $input.value = "";
//     $input.focus();
//   } else {
//     if (word[word.length - 1] === newWord[0]) {
//       word = newWord;
//       $word.textContent = word;
//       const order = Number($order.textContent);
//       if (order + 1 > number) {
//         $order.textContent = 1;
//       } else {
//         $order.textContent = order + 1;
//       }
//       $input.value = "";
//       $input.focus();
//     } else {
//       alert("틀렸습니다.");
//       $input.value = "";
//       $input.focus();
//     }
//   }
// };

// const onInput = (e) => {
//   newWord = e.target.value;
// };

// $button.addEventListener("click", onClickButton);

// $input.addEventListener("input", onInput);
