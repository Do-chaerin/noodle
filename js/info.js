window.addEventListener("scroll", function () {
  const infoBox = document.querySelector(".introduce");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // 화면에서 벗어나면 클래스 제거
        }
      });
    },
    { threshold: 0.5 } // 화면의 20% 이상 보이면 실행
  );
  observer.observe(infoBox);
  const noodle2024 = document.querySelector(".noodle2024");
  const observer2024 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // 화면에서 벗어나면 클래스 제거
        }
      });
    },
    { threshold: 0.2 } // 화면의 20% 이상 보이면 실행
  );
  observer.observe(noodle2024);
  const noodle2023 = document.querySelector(".noodle2023");
  const observer2023 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // 화면에서 벗어나면 클래스 제거
        }
      });
    },
    { threshold: 0.5 } // 화면의 20% 이상 보이면 실행
  );
  observer.observe(noodle2023);
  const noodle2022 = document.querySelector(".noodle2022");
  const observer2022 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // 화면에서 벗어나면 클래스 제거
        }
      });
    },
    { threshold: 0.7 } // 화면의 20% 이상 보이면 실행
  );
  observer.observe(noodle2022);
});
// 스크롤 시 IntersectionObserver를 수동으로 트리거하기
window.addEventListener("scroll", function () {
  const rect = infoBox.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;

  if (isVisible) {
    infoBox.classList.add("show");
  } else {
    infoBox.classList.remove("show");
  }
});
