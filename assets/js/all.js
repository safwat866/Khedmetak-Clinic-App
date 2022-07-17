// toggle header menu
$(".menu-toggle").click(function () {
  $(this).attr("aria-expanded", "true");
  $(".aside-menu").removeClass("-translate-x-full");
  $(".menu-overlay").fadeIn();
  $(document.body).css("overflow", "hidden");
});

$(".aside-closer").click(function () {
  $(".menu-toggle").attr("aria-expanded", "false");
  $(".aside-menu").addClass("-translate-x-full");
  $(".menu-overlay").fadeOut();
  $(document.body).css("overflow", "visible");
});

$(".menu-overlay").click(function () {
  $(".menu-toggle").attr("aria-expanded", "false");
  $(".aside-menu").addClass("-translate-x-full");
  $(this).fadeOut();
  $(document.body).css("overflow", "visible");
});

// fix body overflow in desktop
$(window).resize(function () {
  if ($(this).width() > 992) {
    $(".menu-toggle").attr("aria-expanded", "false");
    $(".aside-menu").addClass("-translate-x-full");
    $(".menu-overlay").fadeOut();
    $(document.body).css("overflow", "visible");
  }
});
