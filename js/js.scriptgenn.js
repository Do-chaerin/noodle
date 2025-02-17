$(document).ready(function() {
    $(".tab a").click(function(e) {
        e.preventDefault();
        $(".tab li").removeClass('active');
        $(this).parent().addClass('active');
    });
});