function dxSimpleSlider(element = "#dx-slider", auto = false, pause) {
  var $this = $(element);

  var slidesCont = $this.children(".slides-container");
  var slides = slidesCont.children(".slide");

  var pager = $this.children(".pager");

  var arrowsCont = $this.children(".arrows");
  var prevSlide = arrowsCont.children(".prev");
  var nextSlide = arrowsCont.children(".next");

  var slidesCount = slides.length;
  var currentSlide = slides.first();
  var currentSlideIndex = 1;
  var autoPlay = null;

  // 모든 슬라이드를 숨기고 첫 번째 슬라이드만 보이게 설정
  slides.hide();
  currentSlide.show().addClass("active");

  function showNext() {
    currentSlide.removeClass("active").hide(); // 현재 슬라이드 숨김

    if (currentSlideIndex == slidesCount) {
      currentSlide = slides.first();
      currentSlideIndex = 1;
    } else {
      currentSlideIndex++;
      currentSlide = currentSlide.next();
    }

    currentSlide.addClass("active").show(); // 새로운 슬라이드 표시
    pager.text(currentSlideIndex + " / " + slidesCount);
  }

  function showPrev() {
    currentSlide.removeClass("active").hide(); // 현재 슬라이드 숨김

    if (currentSlideIndex == 1) {
      currentSlide = slides.last();
      currentSlideIndex = slidesCount;
    } else {
      currentSlideIndex--;
      currentSlide = currentSlide.prev();
    }

    currentSlide.addClass("active").show(); // 새로운 슬라이드 표시
    pager.text(currentSlideIndex + " / " + slidesCount);
  }

  function AutoPlay() {
    clearInterval(autoPlay);
    if (auto == true)
      autoPlay = setInterval(function () {
        showNext();
      }, pause);
  }

  $(nextSlide).click(function (e) {
    e.preventDefault();
    showNext();
    AutoPlay();
  });

  $(prevSlide).click(function (e) {
    e.preventDefault();
    showPrev();
    AutoPlay();
  });

  AutoPlay();
}

$(function () {
  dxSimpleSlider("#slider", true, 3000);
});
