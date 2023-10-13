const form = document.querySelector("form");
const box = document.querySelector(".box");
const success = document.querySelector(".success");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  box.classList.add("hide");
  success.classList.remove("hide");
});