document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 폼 제출 방지

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
    errorMessage.textContent = "아이디와 비밀번호를 모두 입력해주세요.";
    return;
  }

  // 간단한 로그인 로직 (실제로는 백엔드와 연동 필요)
  if (username === "admin" && password === "1234") {
    alert("로그인 성공!");
    errorMessage.textContent = "";
    // 리디렉션 등 추가 작업 가능
  } else {
    errorMessage.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
  }
});