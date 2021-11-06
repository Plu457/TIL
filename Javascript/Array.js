//* toString: 배열안에 있는 값들을 쉼표(,) 를 기준으로 하나의 문자열로 나타낸다
var fruits = ['Banana', 'Orange', 'Apple'];
console.log(fruits.toString());
console.log(typeof fruits.toString());

//* join: 배열에 있는 값들을 join에 넣은 값 기준으로 하나의 문자열로 만든다
console.log(fruits.join(' * '));
console.log(typeof fruits.join(' * '));

//* push: 배열의 가장 마지막에 새로운 element 추가
var arr = [];
arr.push('Banana');
arr.push('Orange');
arr.push('Apple');

//? 배열에 push()를 이용해서 넣은 값들을 화면에 렌더링할 때 join()을 사용하여 구분하면 유용하다
document.querySelector('#div1').innerHTML = arr.join(', ');

//* pop: 배열의 가장 마지막 element를 제거한뒤, 리턴으로 제거된 element를 반환
var str = fruits.pop();
console.log(str);
console.log(fruits);

//* shift: 배열의 첫번째 element 제거한뒤, 리턴으로 제거된 element를 반환
var str = fruits.shift();
console.log(str);
console.log(fruits);

//* unshift: 배열의 첫번째에 새로운 element를 추가
fruits.unshift('Lemon');
console.log(fruits);

fruits[0] = 'Banana';
console.log(fruits);

fruits[fruits.length - 1] = 'Lemon';

fruits[2] = 'Orange';
console.log(fruits);

//* splice(시작위치, 삭제할 element 수)
//* splice: 배열의 중간에 element를 추가, 제거

var fruits = ['Banana', 'Orange', 'Apple'];
fruits.splice(1, 0, 'Lemon', 'Kiwi');
console.log(fruits);

fruits.splice(3, 1);
console.log(fruits);

//* concat: 배열끼리 합치기
var Id = ['plu457'];
var nickname = ['Pulan', 'Plu'];
var plus = Id.concat(nickname);

console.log(plus);

//* slice(시작점, 끝점)
//* slice: 배열에서 내가 원하는 부분만 가져오기
var fruits2 = fruits.slice(1, 3);
console.log(fruits2);
console.log(fruits);

//* sort: 기본적으로 오름차순으로 정렬하기 (단. 배열안에있는 값이 문자열이면 앞에있는 하나의 문자만 가지고 비교)
console.log(fruits.sort());

//* 숫자이면 문자열처럼 앞에있는 하나의 문자만 가지고 비교
var number = [40, 20, 47, 21, 14, 65, 123];
console.log(number.sort());

//* 하나하나 가져오면서 비교하면 문제 해결
number.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(number);

//* 내림차순으로도 변경 가능
number.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(number);

//* 코드쓸때는 이렇게 하지말고 그냥 return a - b, b - a 하면 된다
number.sort((a, b) => a - b);
console.log(number);

number.sort((a, b) => b - a);
console.log(number);

//* 배열에 있는 순서를 반대로 뒤집기
number.reverse();
console.log(number);

//* 배열에 Object가 있는경우
var persons = [
  {
    name: '유재석',
    point: 78,
  },
  {
    name: '김종국',
    point: 92,
  },
  {
    name: '양세찬',
    point: 76,
  },
  {
    name: '하하',
    point: 81,
  },
];

persons.sort((a, b) => {
  if (a.point > b.point) {
    return 1;
  } else if (a.point < b.point) {
    return -1;
  } else {
    return 0;
  }
});

console.log(persons);

persons.sort((a, b) => (a.point > b.point ? 1 : a.point < b.point ? -1 : 0));
console.log(persons);

persons.sort((a, b) => a.point - b.point);
console.log(persons);

persons.sort((a, b) => b.point - a.point);
console.log(persons);

//* filter: 조건에 맞는 배열만 리턴
var persons = [
  { name: '유재석', point: 78, city: '서울' },
  { name: '김종국', point: 92, city: '서울' },
  { name: '양세찬', point: 76, city: '제주' },
  { name: '하하', point: 81, city: '서울' },
];

var pass = persons.filter(person => person.point > 80);
console.log(pass);

var jeju = persons.filter(person => person.city === '제주');
console.log(jeju);

//* reduce(accumulator, currentValue, currentIndex, array)

//* accumulator(누산기): 반환한 값이 저장되는 곳
//* currentValue(현재값): 처리할 현재 요소
//* currentIndex: 처리할 현재 요소의 인덱스
//* array: reduce()를 호출한 배열
var arr1 = [1, 2, 3, 4];
var total = arr1.reduce((a, c) => a + c);

console.log(total);

//* map: 내가 필요로 하는 요소들로만 구성하여 새로운 배열로 반환
var userList = [
  { firstName: '재석', lastName: '유', email: 'you@gmail.com' },
  { firstName: '종국', lastName: '김', email: 'kimg@gmail.com' },
  { firstName: '세찬', lastName: '양', email: 'yang@gmail.com' },
  { firstName: '석진', lastName: '지', email: 'ji@gmail.com' },
];

var userList2 = userList.map(user => {
  return {
    fullName: user.lastName + user.firstName,
    firstName: user.firstName,
    lastName: user.lastName,
  };
});

console.log(userList2);
