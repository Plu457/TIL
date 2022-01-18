//* JavaScript Object Notation
//* JSON: 서버로부터 웹페이지로 데이터를 전송할 때 자주 사용
//*       웹페이지에서 서버로 데이터를 전송할 때도 json 포맷 자주 사용

var users = {
  employees: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Pul', lastName: 'an' },
    { firstName: 'Jin', lastName: 'Da' },
  ],
};

//* JSON.stringify: 데이터를 문자열로 변환
console.log(users);

console.log(JSON.stringify(users));

var strUser = JSON.stringify(users);

//* JSON.parse: 문자열을 객체로 만들어준다

var obj = JSON.parse(strUser);
console.log(obj);
