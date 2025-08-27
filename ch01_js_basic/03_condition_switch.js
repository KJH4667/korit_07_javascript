let date = new Date(); // New Date 라고 적으면 오류난다. 소문자인 new를 적어야한다..
let day = date.getDay(); // 객체명. 메서드명()의 결과값을 day 변수에 대입 
/* 
일요일 = 0, 월요일 = 1, ... 토요일 = 6 리턴 합니다.
return 자료형은 number
*/

switch(day) {
  case 0:
dayName = "일요일";
  break;
  case1:
dayName = '월요일';
case2:
dayName = '화요일';
break;
case3:
dayName = '수요일';
break;
case4:
dayName = '목요일';
break;
case5:
dayName = '금요일';
break;
case6:
dayName = '토요일';
break;
default:
  dayName='잘못된 결과값입니다.';
  break;
  
  
}