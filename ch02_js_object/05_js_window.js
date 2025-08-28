//alert()

// alert('이것은 alert창입니다.');

// confirm()
// confirm();

// prompt()
prompt('삭제하신다면 delete my page를 입력하세요.');

//open()
//open('https://www.naver.com');

// setTimeout() / clearTimeout()
let myExec;

function myFunction() {
  myExec = setTimeout (
    function() {console.log('5초 후 실행')}
    , 5000
  );
}

function myStopFunction() {
  console.log('취소되었습니다.')
  clearTimeout(mtExec);
}

// 보통 onclick에 사용합니다. 


// 함수 호출.  5초후 실행
myFunction(); 