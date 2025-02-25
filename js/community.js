window.addEventListener("load", function () {
  const btn = this.document.querySelectorAll(".notice-title");
  const txtbox = this.document.querySelectorAll(".notice-txt");
  const btntxt = this.document.querySelectorAll("span");
  btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      showtxt(index);
    });
  });
  function showtxt(index) {
    // h3, notice-txt, span을 함께 토글
    btn[index].classList.toggle("click");
    txtbox[index].classList.toggle("click");

    // 현재 txtbox가 열려 있는지 확인하고 span의 텍스트 변경
    if (txtbox[index].classList.contains("click")) {
      btntxt[index].textContent = "▲"; // 열렸을 때
    } else {
      btntxt[index].textContent = "▼"; // 닫혔을 때
    }
  }
});
