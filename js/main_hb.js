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
  const options = document.querySelectorAll(".choose");
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
      for (let j = 0; j < options.length; j++) {
        if (options[j].classList.contains("selected")) {
          options[j].classList.remove("selected");
        }
      }
      options[i].classList.add("selected");
      for (let k = 0; k < options.length; k++) {
        options[k].classList.add("selectall");
      }
      let forVal = options[i].getAttribute("for");
      let selectInput = document.querySelector("#" + forVal);
      let getAtt = selectInput.getAttribute("type");
      if (getAtt == "checkbox") {
        selectInput.setAttribute("type", "radio");
      } else if (selectInput.checked == true) {
        options[i].classList.remove("selected");
        selectInput.setAttribute("type", "checkbox");
      }
      let array = [];
      for (let l = 0; l < options.length; l++) {
        if (options[l].classList.contains("selected")) {
          array.push(l);
        }
      }
      if (array.length == 0) {
        for (let m = 0; m < options.length; m++) {
          options[m].removeAttribute("class");
        }
      }
    });
  }
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".wrapper");
    popup.style.display = "none";
  });
  
});
