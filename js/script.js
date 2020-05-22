let x = document.querySelectorAll("div");
x[4].addEventListener("click", () => {
  goUp();
});

let goUp = () => {
  window.scrollBy({
    top: -5000,
    behavior: 'smooth'
  });
}
