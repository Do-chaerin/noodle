function dxSimpleSlider(element = "#dx-slider", auto = false, pause = 3000) {
  var $this = $(element);

  var slidesCont = $this.children(".slides-container");
  var slides = slidesCont.children(".slide");

  var pager = $this.children(".pager");

  var arrowsCont = $this.children(".arrows");
  var prevSlide = arrowsCont.children(".prev");
  var nextSlide = arrowsCont.children(".next");

  var slidesCount = slides.length;
  var currentSlideIndex = 0;
  var autoPlay = null;

  // 모든 슬라이드를 숨기고 첫 번째 슬라이드만 보이게 설정
  slides.css({ position: "absolute", top: 0, left: 0 }).hide();
  slides.eq(currentSlideIndex).show().addClass("active");

  // 초기 pager 업데이트
  pager.text(currentSlideIndex + 1 + " / " + slidesCount);

  function showSlide(newIndex) {
    if (newIndex === currentSlideIndex) return; // 동일한 슬라이드로 이동 방지

    var currentSlide = slides.eq(currentSlideIndex);
    var newSlide = slides.eq(newIndex);

    currentSlide.css("z-index", 1).fadeOut(500, function () {
      $(this).removeClass("active");
    });

    newSlide.css("z-index", 2).fadeIn(500).addClass("active");

    currentSlideIndex = newIndex;
    pager.text(currentSlideIndex + 1 + " / " + slidesCount);
  }

  function showNext() {
    var nextIndex = (currentSlideIndex + 1) % slidesCount;
    showSlide(nextIndex);
  }

  function showPrev() {
    var prevIndex = (currentSlideIndex - 1 + slidesCount) % slidesCount;
    showSlide(prevIndex);
  }

  function startAutoPlay() {
    if (auto) {
      clearInterval(autoPlay);
      autoPlay = setInterval(showNext, pause);
    }
  }

  nextSlide.on("click", function (e) {
    e.preventDefault();
    showNext();
    startAutoPlay();
  });

  prevSlide.on("click", function (e) {
    e.preventDefault();
    showPrev();
    startAutoPlay();
  });

  startAutoPlay();
}

$(document).ready(function () {
  dxSimpleSlider("#slider", true, 3000);
});
