window.addEventListener("load", function () {
  const scrollTopBtn = this.document.querySelector(".scrollToTop");
  const scrollDownBtn = this.document.querySelector(".scrollTodown");
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  scrollDownBtn.addEventListener("click", () => {
    window.scrollTo({ top: window.scrollY + 1000, behavior: "smooth" });
  });
});
