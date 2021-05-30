# 변수의 종류
원래는 `var` 선언자만 있었는데 ES6이후로 재사용에 따라 달라지는 `let`과 `const` 선언자가 생겼다.

## 1) var
```javascript
var x = 10; // 변수 x에 10을 저장
var y = 6; // 변수 y에 6을 저장
var z = x + y; // z에 11이 저장됨

console.log(x);  // console: 10
console.log(y);  // console: 6
console.log(z);  // console: 16

var x = 3; // 재선언
z = x + y; // 이미 선언된 변수에 새로운 값을 할당
console.log(x);  // console: 3
console.log(z);  // console: 9
```
- `var` 은 재선언,재할당 모두 가능하다.
- 위에서 말한 특징 때문에 코드가 짧아질때는 상관없지만 길어지면 에러가 발생할 확률이 높아진다.

## 2) let
```javascript
let x1 = 10; // 변수 x에 10을 저장

let x1 = 3;
console.log(x1);  // console: Uncaught SyntaxError: Identifier 'x1' has already been declared

x1 = 3;
console.log(x1); // console: 3
```
- `let`은 재선언은 불가능하고 `재할당`은 가능하다.

## 3) const
```javascript
const x2 = 10; // 변수 x에 10을 저장

const x2 = 6
console.log(x2); // Uncaught SyntaxError: Identifier 'x2' has already been declared

x2 = 6;
console.log(x2); // Uncaught TypeError: Assignment to constant variable.
```
- `const`는 재선언,재할당 모두 불가능하