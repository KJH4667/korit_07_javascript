let data = {
  "employes" : [
    {"fisrtName":"John", "lastName": "Doe"},
    {"fisrtName":"Anna", "lastName": "Smith"},
    {"fisrtName":"Peter", "lastName": "Parker"},
  ],
};

console.log(data);
// 객체를 문자열로 변환
let stringValue = JSON.stringify(data);
console.log(stringValue);

// 문자열 형태의 JSON 데이터를 JavaScript Object로 변환
let obj = JSON.parse(stringValue);

console.log(obj);

