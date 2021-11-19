//* Global Scope와 Local Scope 구분
//* scope: 변수에 대한 접근성

//* Local Scope
function myFunction() {
  var carName = 'Hyundai';
  console.log(carName);
}

myFunction();

//* Global Scope
var carName2 = 'KIA';

function myFunction2() {
  console.log(carName2);
}

myFunction2();
