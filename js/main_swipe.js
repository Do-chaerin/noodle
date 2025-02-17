window.addEventListener("load", () => {
  // Swiper
  var swiper = new Swiper(".asiaswiper", {
    grabCursor: true,
    speed: 400,
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
    speed: 400,
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

  //관광정보
  var timelineSwiper = new Swiper(".timeline .busswiper .swiper-container", {
    direction: "vertical",
    loop: false,
    speed: 1600,
    pagination: ".swiper-pagination",
    paginationBulletRender: function (swiper, index, className) {
      var year = document.querySelectorAll(".swiper-slide")[index].getAttribute("data-year");
      return '<span class="' + className + '">' + year + "</span>";
    },
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    breakpoints: {
      768: {
        direction: "horizontal",
      },
    },
  });
});
