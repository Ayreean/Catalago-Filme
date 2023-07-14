// login.js
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform validation here
  if (username === "admin" && password === "admin") {
    // Redirect to main screen
    window.location.href = "main.html";
  } else {
    alert("Nome ou senha invalidos");
  }
}