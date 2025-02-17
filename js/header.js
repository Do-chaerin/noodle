window.addEventListener("load", function () {
  const li = this.document.querySelectorAll(".tab li");
  li.forEach(function (list) {
    list.addEventListener("click", () => {
      list.classList.toggle(".active");
    });
  });
});
