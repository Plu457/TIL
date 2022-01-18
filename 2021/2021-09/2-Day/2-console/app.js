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
console.dir(student, {});

// 참고
// https://nodejs.org/dist/latest-v14.x/docs/api/console.html#console_console_dir_obj_options
