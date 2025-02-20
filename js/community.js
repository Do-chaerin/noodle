window.addEventListener("load", function () {
  const btn = this.document.querySelectorAll("h3");
  const txtbox = this.document.querySelectorAll(".notice-txt");
  btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      showtxt(index);
    });
  });
  function showtxt(index) {
    btn.forEach(function (btn2) {
      btn[index].classList.toggle("click");
    });
    txtbox.forEach(function (txtbox2) {
      txtbox[index].classList.toggle("click");
    });
  }
});
