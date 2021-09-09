console.log("logging...");
console.clear();

// log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert 첫번째 인자가 true가 아닐때만 로그로 출력 할 수 있다,
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "Pulan", age: 19, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: true, depth: 0 }); // 옵션을 전달해서 추가적으로 더 컨트롤할 수 있음

// measuring time -> 시간 측정
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting -> 해당하는 레이블이 몇번 호출 됬는지 알수있음
function a() {
  console.count("a function");
}
a();
console.countReset("a function");
a();
a();

// trace -> 디버깅 할 때 유용
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace(); // 누가 이 함수를 호출했는지 알 수 있다.
}

f1();

// 참고
// https://nodejs.org/dist/latest-v14.x/docs/api/console.html#console_console_dir_obj_options
