window.addEventListener("load", () => {
  // Swiper
  var swiper = new Swiper(".asiaswiper", {
    grabCursor: true,
    loop: true,
    speed: 400,
    autoplay: {   // 자동 재생 추가
      delay: 3000, // 3초마다 슬라이드 이동
      disableOnInteraction: false, // 사용자가 터치해도 autoplay 계속 동작
    },
    mousewheel: {
      invert: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".futureswiper", {
    grabCursor: true,
    loop: true,
    speed: 400,
    autoplay: {   // 자동 재생 추가
      delay: 3000, // 3초마다 슬라이드 이동
      disableOnInteraction: false, // 사용자가 터치해도 autoplay 계속 동작
    },
    mousewheel: {
      invert: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

});
