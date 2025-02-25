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
    slidesPerView: "auto",
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
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
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
const cards = document.querySelectorAll(".card--wrapper");

cards.forEach((card) => {
  const { x, y, width, height } = card.getBoundingClientRect();
  const centerPoint = { x: x + width / 2, y: y + height / 2 };
  card.addEventListener("mousemove", (e) => {
    card.style.setProperty(
      "--tx",
      `${(e.clientY - centerPoint.y) * -0.0004}px`
    );
    card.style.setProperty(
      "--ty",
      `${(e.clientX - centerPoint.x) * -0.0004}px`
    );
    card.style.setProperty("--rx", `${(e.clientY - centerPoint.y) * 0.04}deg`);
    card.style.setProperty("--ry", `${(e.clientX - centerPoint.x) * -0.04}deg`);
  });
  card.addEventListener("mouseout", (e) => {
    card.style.setProperty(
      "--tx",
      `0px`
    );
    card.style.setProperty(
      "--ty",
      `0px`
    );
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  });
});

