window.addEventListener("load", function () {
  const li = this.document.querySelectorAll(".tab li");
  const box = this.document.querySelectorAll(".item");
  li[0].classList.add("active");
  box[0].classList.add("active");
  li.forEach(function (item, index) {
    item.addEventListener("click", () => {
      showbox(index);
    });
  });
  function showbox(index) {
    li.forEach(function (item) {
      item.classList.remove("active");
    });
    box.forEach(function (item) {
      item.classList.remove("active");
    });
    li[index].classList.add("active");
    box[index].classList.add("active");
  }
  window.setTimeout(function () {
    map.relayout();
  }, 0);
 
});
