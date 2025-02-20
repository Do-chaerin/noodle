window.addEventListener("load", function () {
  const li = document.querySelectorAll(".tab li");
  const mbli = document.querySelectorAll(".mbtab li");
  const box = document.querySelectorAll(".item");
  li[0].classList.add("active");
  mbli[0].classList.add("active");
  box[0].classList.add("active");
  li.forEach(function (item, index) {
    item.addEventListener("click", () => {
      showbox(index);
    });
  });
  mbli.forEach(function (item, index) {
    item.addEventListener("click", () => {
      showbox(index);
    });
  });
  function showbox(index) {
    li.forEach(function (item) {
      item.classList.remove("active");
    });
    mbli.forEach(function (item) {
      item.classList.remove("active");
    });
    box.forEach(function (item) {
      item.classList.remove("active");
    });
    li[index].classList.add("active");
    mbli[index].classList.add("active");
    box[index].classList.add("active");
  }
});

// 모바일 햄버거바 메뉴
$(document).ready(function () {
  //햄버거바 클릭
  $("#hamburger-menu").click(function () {
    $(".mobile-nav").animate({ right: 0 }, 300);
  });
  // 닫기
  $("#close-menu").click(function () {
    $(".mobile-nav").animate({ right: "-250px" }, 300);
  });
  //하위메뉴 토글
  $(".mobile-nav .gnb > li > a").click(function () {
    // 열린 .depth를 닫기
    $(".mobile-nav .depth").stop().slideUp();
    $(this).next(".mobile-nav .depth").stop().slideToggle();
  });
});
