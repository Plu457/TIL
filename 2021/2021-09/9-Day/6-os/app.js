const os = require("os");

// 나의 운영체제에서 EOL(줄바꿈 문자열) 이 어떤것인지 확인할 수 있다.
console.log(os.EOL === "\n");
console.log(os.EOL === "\r\n");

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir);
console.log(os.hostname());
