var txt = 'ABCDEFGHIJKLMN';

//* length: 글자의 길이
console.log(txt.length);

//* indexOf: 문장 안에서 내가 찾고 싶은 문자가 어느 인덱스에 있는지 확인 (시작점)
//*          문장 안에 있다면 0 보다 큰 숫자를 리턴한다
//*          문장 안에 없다면 -1 을 리턴한다
var str = `Please locate where 'locate`;
console.log(str.indexOf('locate'));
console.log(str.indexOf('Jhon'));

if (str.indexOf('locate') > -1) {
  console.log('locate 문자 발견');
}

if (str.indexOf('Jhon') > -1) {
  console.log('Jhon 문자 발견');
} else {
  console.log('Jhon이란 문자는 포함되지 않음');
}

//* lastIndexOf: indexOf 와는 다르게 찾고 싶은 문자가 문자열에 있다면 마지막에 있는 인덱스를 알려줌 (끝점)
console.log(str.lastIndexOf('locate'));

//* search
console.log(str.search('locate'));
console.log(str.search('Jhon'));

//! 구글에 'substr(), substring(), slice() 비교' 검색

//* slice(시작점, 끝점)
//* slice: 시작점과 끝점-1 사이에 있는 내용을 뺌
//*        시작점만 있는 경우 시작점부터 끝까지 내용을 뺌
//*        끝에서 부터 시작 가능
var str = 'Apple, Banana, Kiwi';
console.log(str.slice(7, 13));
console.log(str.slice(7));
console.log(str.slice(-12, -6));

//* substring(시작점, 끝점)
//* substring: slice와 매우 유사함
console.log(str.substring(7, 13));

//* substr(시작점, 가져올 글자 수)
console.log(str.substr(7, 6));

var birthday = '030425';

//* 몇년도 생인지 알고 싶을때
console.log(birthday.substr(0, 2));

//* 몇월생인지 알고 싶을때
console.log(birthday.substr(2, 2));

//? 자릿수가 명확한 경우 substr 이 유용함

var birthday = '2003-04-25';
console.log(birthday.substring(0, birthday.indexOf('-')));
console.log(birthday.slice(0, birthday.indexOf('-')));

//? 자릿수가 명확하지 않을 경우 substring, slice 이 유용함
