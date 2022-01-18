var x = 123;

//* toString: 숫자를 문자열로 변형
var x2 = x.toString();
console.log(x2);
console.log(typeof x2);

//* toString(2): 2진수로 바꾸기
console.log(x.toString(2));

//* toFixed: 지정된 소수점 자리수까지 반올림으로 표기
var x = 123999.567243;
console.log(x.toFixed(2));

//* toPrecision: 정수까지 포함한 자릿수를 의미
var x = 9.565;
console.log(x.toPrecision(2));

//* Number(): 뭇자열을 숫자로 변환
var x = Number('10');
console.log(typeof x);

//* 자바스크립트에서 Number()라는 메서드에 Boolean true를 넣으면
//* true는 1을 의미하고, false는 0을 의미한다
var x = Number(true);
console.log(typeof x);
console.log(x);

var x = Number(false);
console.log(typeof x);
console.log(x);

//* Number() 에 들어있는 값에 공백이 들어있으면 공백을 무시하고 숫자로 변환시켜준다
var x = Number('  10    ');
console.log(x);

//* 값에 콤마(,) 가 있으면 NaN(Not a Number) 으로 반환한다
var x = Number('  10,33  ');
console.log(x);

//* 문자열도 NaN 으로 반환한다
var x = Number('Jhon');
console.log(x);

//* 숫자와 숫자 사이에 공백이 있어도 NaN 으로 반환한다
var x = Number('10 33');
console.log(x);

//* parseInt: 문자열을 숫자로 변환 (정수형으로만 변환)
console.log(parseInt('3'));
console.log(parseInt('3.9'));
console.log(parseInt('3.141592 abcdefg'));

//* 숫자와 숫자 사이에 공백이 있으면 맨 앞에 있는 숫자만 반환하고
//* 숫자 뒤에 문자열이 붙어있으면 앞에 있는 숫자만 반환 하지만
//* 문자열 뒤에 숫자가 있는 경우는 NaN 을 반환한다
console.log(parseInt('10 20 30'));
console.log(parseInt('19year'));
console.log(parseInt('year19'));

//* parseFloat: 문자열을 숫자로 변환 (소수점 까지 반환)
console.log(parseFloat('10'));
console.log(parseFloat('3.141592'));
console.log(parseFloat('3.141592 abcdefg'));
