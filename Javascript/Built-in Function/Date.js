//! momentjs.com => 날짜, 시간 등을 사용할 때 유용한 라이브러리
//! 사용할 때는 cdnjs에서 사용하면 됨
//* 기본 생성방법
var d = new Date();
console.log(d);

//* getFullYear: 연도 반환
var year = d.getFullYear();
console.log(`${year}년`);

//* getMonth: 월 반환
var month = d.getMonth();
console.log(`${month}월`);

//* getDate: 일 반환
var date = d.getDate();
console.log(`${date}일`);

//* getDay: 오늘이 무슨 요일인지 반환
//* 일: 0   월: 1   화: 2   수: 3   목: 4   금: 5   토: 6
var daty = d.getDate();
console.log(`${daty}일`);

//* getHours: 시간 반환
//* getMinutes: 분 반환
//* getSeconds: 초 반환
//? 이때 나오는 시간은 우리 컴퓨터로 기준이됨
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
console.log(`${hour} : ${minute} : ${second}`);

//* 직접 지정
//* month인 경우는 0부터 시작 -> 1월 - 0
//* day인 경우는 1부터 시작 -> 1일 - 1
var d = new Date(2021, 4, 25, 6, 43, 30);
console.log(d);

//* 3월 인 경우 - 2
var month_en = ['Jan', 'Feb', 'Mar'];

var month = 2;
console.log(month_en[month]);

//* 타임존
//* getTimezoneOffset: 분단위   -540 => -9시간
console.log(new Date().getTimezoneOffset());

//* 블로그 포스팅한다는 가정
//* 한국: 2021.4.25 12:10:45
//* 영국: 2021.4.25 03:10:45   (한국 기준 시간 - 9)

//* UTC 기준으로 불러오기
var d = new Date();

var utcYear = d.getUTCFullYear();
var utcMonth = d.getUTCMonth();
console.log(`${utcYear} ${utcMonth}`);
