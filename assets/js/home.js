$(document).ready(function () {
  $(".drop-btn").click(function () {
    $(".dropdown-menu").slideToggle(300);
  });
  $(".right-btn").click(function () {
    $(".dropdown-menu-right").animate({
      width: "toggle",
    });
  });
  $(function () {
    $(document).on("click", ".left", customSliderRight);
    console.log("Yes");
    let interval = setInterval(customSliderRight, 2000);
    function customSliderRight() {
      let activeImg = $(".active");
      if (activeImg.next().length != 0) {
        activeImg.removeClass("active");
        activeImg.next().addClass("active");
      } else {
        $(".img").children().first().addClass("active");
        activeImg.removeClass("active");
      }
    }
  });
});
