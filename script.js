document.getElementById("toggleButton").addEventListener("click", function () {
  const passwordInput = document.getElementById("passwordInput");
  const toggleButton = document.getElementById("toggleButton");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show Password";
  }
});
