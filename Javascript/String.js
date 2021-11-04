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

//* replace(바꾸싶은 문자열, 바꿀려는 문자열)
//* replace: 내가 원하는 문자를 찾아서 다른 문자로 바꾸고 싶을 때 사용
var str = 'Please visit here';
var str2 = str.replace('here', 'there');
console.log(str2);

//? 예시에 보이듯이 replace는 발견된 처음것만 변경됨
var str = 'Please visit here here here here';
var str2 = str.replace('here', 'there');
console.log(str2);

//? 정규식을 사용하면 전부다 바꿀수 있음
//* /찾고 싶은 문자/   g: 전체적으로 찾기   i: 대소문자 구별 없음
var str = 'Please visit here here HERE here';
var str2 = str.replace(/here/gi, 'there');
console.log(str2);

//* toUpperCase: 전부다 대분자로 바꾸기
console.log(str.toUpperCase());

//* toLowerCase: 전부다 소문자로 바꾸기
console.log(str.toLowerCase());

//? DB에 john, John 저장 -> 받아온 값과 비교할 때 소문자나 대문자로 전환하여 비교한다
//? 사용자가 소문자로 넣든 대문자로 넣든 서버로 던지기 전에 lowercase, uppercase로 바꾼다

//* concat: 문자열을 결합시키는 용도
var txt1 = 'Hello';
var txt2 = 'World';
var txt3 = txt1 + ' ' + txt2;
console.log(txt3);

var txt4 = txt1.concat(' ', txt2);
console.log(txt4);

//* trim: 앞 뒤로 붙은 공백들을 자동으로 지워줌
//? 위에서 uppercase, lowercase 설명하면서 예시로 든 검색창에서 사용자가 검색할 때 키워드에다가 공백을 많이 넣어 버리면 나중에 서버에서 공백을 포함한 상태로 DB에서 찾는데 원하는 결과가 나오지 않아서 그 문제를 해결하기 위해 사용되기도 함 (정확한 결과값을 구하는 용도)
var str = '  Hello World!   ';
console.log(str);
console.log(str.trim());

//* padStart(넣은 수 만큼의 문자열을 만들기, 앞에 빈 공간이 있으면 넣은 값으로 채움)
//* padStart: 앞으로 부터 내가 원하는 거를 채우는 용도
var str = '5';
console.log(str.padStart(4, 0));

//* padEnd: 뒤에서 부터 내가 원하는 거를 채우는 용도
//* padEnd(넣은 수 만큼의 문자열을 만들기, 뒤에 빈 공간이 있으면 넣은 값으로 채움)
console.log(str.padEnd(4, 0));

//* charAt: 문자열에서 내가 원하는 위치에 있는 특정 캐릭터 하나를 가져오는 용도
var str = 'Hello World';
console.log(str.charAt(0));

//* split: 특정 문자를 기준으로 나누어서 배열로 바꾸는 용도
var tags = '키보드, 기계식, 블루투스';
var arr = tags.split(',');
console.log(arr);

var birthday = '2003-04-25';
var arr2 = birthday.split('-');
console.log(arr2);
