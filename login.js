// login.js
function login(event) {
  event.preventDefault(); // Prevent the default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform validation here
  if (username === "admin" && password === "admin") {
    // Redirect to main screen
    console.log("Login successful");
    window.location.href = "main.html";
  } else if (username === "admin") {
    alert("Invalid password");
  } else if (password === "admin") {
    alert("Invalid username");
  } else {
    alert("Invalid username and password");
  }
}
