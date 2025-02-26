$(function(){
    var swiper1 = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
})
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