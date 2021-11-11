console.log(window);

//* alert: 사용자에게 말하고 싶은 말 보여주기 (단방향)
// alert('alert 창');

//* confirm:  Yes or No    => 사용자에게 의사결정 물어보기
//*          true   false
// var yn = confirm('정말 삭제하겠습니까?');
// console.log(yn);

// if (yn) {
//   //* 삭제 실행
//   console.log('삭제 실행');
// } else {
//   //* 삭제 취소
//   console.log('삭제 취소');
// }

//* prompt: 사용자로부터 input 박스를 사용하여 텍스트 값을 입력 받을 수 있다.
// var txt = prompt('비밀번호를 입력하세요');
// console.log(txt);

// if (txt === null) {
// } else if (txt === '') {
// } else if (txt !== '') {
//   console.log(txt);
// }

//* open: 새 창 열어서 적은 주소 열기
// window.open('https://naver.com');

//* print: 현재 보이는 페이지 인쇄
// window.print();

//* setTimeout: 지정된 시간 이후에 받은 콜백함수를 실행 (정확하지 않을 때가 있음)
// setTimeout(() => {
//   console.log('setTimeout 2초후 실행');
// }, 2000);

//* setInterval: 정해진 시간마다 받은 콜백함수를 반복 실행 (정확하지 않을 때가 있음)
//* clearInterval & clearTimeout
var i = 0;
var fnc = setInterval(() => {
  console.log('setInterval 2초마다 실행 - ' + i);
  if (i > 3) {
    clearInterval(fnc);
  }
  i++;
}, 2000);
