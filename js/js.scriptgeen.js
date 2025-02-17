$(document).ready(function() {
  $(".tab a").click(function (e) {
      e.preventDefault();
      $(".tab li").removeClass("active");
      $(this).parent().addClass("active");
      console.log(this);
  });
  $(".middle2 a").hover(function (e) {
      e.preventDefault();
      $(".middle1 img , .middle2 img").removeClass("active");
      $(this).find(this).addClass("active");
      console.log(this);
  });
});
