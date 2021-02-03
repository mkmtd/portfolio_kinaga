document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("hamburger_btn")
    .addEventListener("click", function () {
      document.getElementById("nav").classList.toggle("active");
    });
  document.getElementById("nav").addEventListener("click", function () {
    this.classList.remove("active");
  });
});
