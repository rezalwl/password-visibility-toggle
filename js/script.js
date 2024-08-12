const password = document.getElementById("password");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.classList.add("hide");
  } else {
    password.type = "password";
    toggle.classList.remove("hide");
  }
});
