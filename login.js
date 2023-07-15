function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform validation here
  if (username === "admin" && password === "admin") {
    // Redirect to main screen
    console.log("Login successful");
    window.location.assign("main.html");
  } else if (username === "admin") {
    alert("Senha invalida");
  } else if (password === "admin") {
    alert("Nome invalido");
  } else {
    alert("Nome e senha invalidos");
  }
}