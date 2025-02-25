window.addEventListener("load", () => {
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
  // Swiper
  var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
  //팝업
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
  const popup = document.querySelector(".popupwrapper");
  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 850) {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  });
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".wrapper");
    popup.style.display = "none";
  });
  //관광정보
  const step = document.querySelectorAll(".progress_inner__step");
  const tabs = document.querySelectorAll(".tabmain");
  const radios = document.querySelectorAll('input[name="step"]');

  // 첫 번째 탭 활성화
  step[0].classList.add("active");
  tabs[0].style.display = "flex";

  step.forEach((stepbtn, index) => {
    stepbtn.addEventListener("click", () => {
      // 모든 버튼 비활성화
      step.forEach((btn) => btn.classList.remove("active"));
      // 모든 탭 숨김
      tabs.forEach((tab) => (tab.style.display = "none"));

      // 클릭한 버튼 활성화
      stepbtn.classList.add("active");
      // 해당 탭 표시
      tabs[index].style.display = "flex";
      // 해당 라디오 버튼 체크
      radios[index].checked = true;
    });
  });
});
