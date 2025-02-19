window.addEventListener("load", function () {
 const btn = this.document.querySelectorAll("h3 button")
 const txtbox = this.document.querySelectorAll(".notice-txt")
 btn[0].classList.add("click")
 txtbox[0].classList.add("click")
 btn.forEach((btn, index) =>{
    btn.addEventListener("click", () => {
        showtxt(index);
      });
 })
 function showtxt(index) {
    btn.forEach(function (btn2) {
      btn2.classList.remove("click");
    });
    txtbox.forEach(function (txtbox2) {
      txtbox2.classList.remove("click");
    });
    btn[index].classList.add("click")
    txtbox[index].classList.add("click")
  }
});
