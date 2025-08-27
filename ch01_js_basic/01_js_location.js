// document.write('자바스크립트 js 파일에 위치<br>')

// var greeting = 'Hello, World';

// console.log('Hello, JavaScript');

var x = 5;
var y = 6;
var z = x + y; 
console.log(z);


var x = 7;
z = x + y
console.log(z);


const person = {
fisrNmae: 'jone',
lastName: 'Doe',
age: 20,
eyeColor: 'blue'
};

// 객체의 출력
console.log(person);


// 객체의 property 수정방법 # 1
person.firstName = '일';  // 이건 Java에서의 field 수정법인 것 같죠
person.lastName = '김';   // access modi


// // 객체의 property 수정방법 # 2
person['eyeColor'] = 검은색;  // 이건 Java에서의 Map수정 방법인것 같죠
console.log(person);




// 비교 연산자 부분
let a =3;
let b ='3';

console.log(a==b); // 결과값이 true
console.log(a===b); // 결과값이 false