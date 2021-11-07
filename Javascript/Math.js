//* round: 반올림
console.log('round: 10.7 ->', Math.round(10.7));
console.log('round: 10.3 ->', Math.round(10.3));
console.log('round: -4.2 ->', Math.round(-4.2));

//* ceil: 올림
console.log('ceil: 5.7 ->', Math.ceil(5.7));
console.log('ceil: 5.3 ->', Math.ceil(5.3));
console.log('ceil: -4.2 ->', Math.ceil(-4.2));

//? 게시판 페이지 처리
//* 데이터 72건
//* 1페이지 보여지는 건수 10개 설정
//* 하단에 보여지는 수 1, 2, 3, 4, 5, 6, 7, 8

console.log(Math.ceil(72 / 10));

//* floor: 내림
console.log('floor: 9.9 ->', Math.floor(9.9));
console.log('floor: -4.2 ->', Math.floor(-4.2));

//* trunc: 정수 부분만 리턴
console.log('trunc: 9.9 ->', Math.trunc(9.9));
console.log('trunc: -4.2 ->', Math.trunc(-4.2));

//* sign: 음수인지 양수인지 판별
//*   - 음수: -1
//*   - 양수: 1
//*   - 0: 0
console.log('음수: -7 ->', Math.sign(-7));
console.log('양수: 14 ->', Math.sign(14));
console.log('0: 0 ->', Math.sign(0));

//* pow: 제곱수
console.log('7의 제곱:', Math.pow(7, 2));

//* sqrt:루트
console.log('루트 49:', Math.sqrt(49));

//* abs: 음수든 양수든 모두 양수로 리턴
console.log('음수: -4.7 ->', Math.abs(-4.7));

//* max: 최대값 찾기
console.log('max:', Math.max(0, 123, 45, -452, 156));

//* min: 최소값 찾기
console.log('mim:', Math.min(0, 123, 45, -452, 156));

//* random: 랜덤  (0 ~ 1 사이의 수)
console.log('random:', Math.random());
