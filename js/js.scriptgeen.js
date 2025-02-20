$(document).ready(function() {
  $(".tab a").click(function (e) {
      e.preventDefault();
      $(".tab li").removeClass("active");
      $(this).parent().addClass("active");
      console.log(this);
  });
  $(document).ready(function(){
    $(".st_1").hover(
      function() {
        $("#st-2 img, #st-3 img").addClass("jumpanimation");
      },
      function() {
        $("#st-2 img, #st-3 img").removeClass("jumpanimation");
      }
    );
  
    $(".st_2").hover(
      function() {
        $("#st-4 img ").addClass("jumpanimation");
      },
      function() {
        $("#st-4 img").removeClass("jumpanimation");
      }
    );
  
    $(".st_3").hover(
      function() {
        $("#st-5 img , #st-6 img , #st-7 img").addClass("jumpanimation");
      },
      function() {
        $("#st-5 img , #st-6 img , #st-7 img").removeClass("jumpanimation");
      }
    );
  
    $(".st_5").hover(
      function() {
        $("#st-8 img").addClass("jumpanimation");
      },
      function() {
        $("#st-8 img").removeClass("jumpanimation");
      }
    );
  });
  var swiper = new Swiper(".asiaswiper , .futureswiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",

      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
  },
  });
})
