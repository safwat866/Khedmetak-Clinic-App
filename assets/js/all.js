// toggle header menu
function hideMenu() {
  $(".menu-toggle").attr("aria-expanded", "false");
  $(".aside-menu").addClass("-translate-x-full");
  $(".menu-overlay").fadeOut();
  $(document.body).css("overflow", "visible");
}

function showMenu() {
  $(this).attr("aria-expanded", "true");
  $(".aside-menu").removeClass("-translate-x-full");
  $(".menu-overlay").fadeIn();
  $(document.body).css("overflow", "hidden");
}

$(".menu-toggle").click(function () {
  showMenu();
});

$(".aside-closer").click(function () {
  hideMenu();
});

$(".menu-overlay").click(function () {
  hideMenu();
});

// fix body overflow in desktop
$(window).resize(function () {
  if ($(this).width() > 992) {
    hideMenu();
  }
});

// upload recipe image
$(".upload-recipe").click(function () {
  $(this).prev().click();
});

function showUploadedFile(file) {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  $(".img-box").append(img);
}

$(".recipe-input").change(function (e) {
  const file = e.target.files[0];
  showUploadedFile(file);
});
