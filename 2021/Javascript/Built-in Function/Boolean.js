//* 기본적으로 Boolean 생성하는 방법
var x = true;

//* Object 객체로 생성
//* String.js에 있는 '생성자 함수로 생성' 는 잘못적음 'Object 객체로 생성'으로 바꿔줘야 함
var y = new Boolean(true);

console.log(typeof x);
console.log(typeof y);

//* '==' 은 값만 비교해서 true 라는 표시가 나오지만 '===' 은 타입까지 비교해서 false 라고 표시된다
console.log(x == y);
console.log(x === y);

//* 평번하게 10 > 9 하면 Boolean 타입이지만 Boolean으로 비교하면 Object가 된다
console.log(10 > 9);
console.log(Boolean(10 > 9));

//* Number.js 에서 보았듯이 1은 true 이고 0은 false 이다
console.log(1);
console.log(Boolean(1));

console.log(0);
console.log(Boolean(0));

//* Boolean 은 1이 아니면 전부다 false이다 (ex: '', undefined)
var x = '';
console.log(Boolean(x));

var x;
console.log(Boolean(x));
