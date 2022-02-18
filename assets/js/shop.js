$(document).ready(function () {
  $("i").click(function () {
    $(".ul").removeClass("d-none");
    $(".li").removeClass("far fa-plus");
    $(".li").addClass("fal fa-minus");
    $(".ul").slideToggle();
   
  });

  $("#1").click(function () {
    $(".count-categories").addClass("d-none");
    $(".sort-categories").addClass("d-block");
    $(".sort-categories").removeClass("d-none");
    
    $(".sort-categories").slideToggle(1000);
   
  });
  $("#2").click(function () {
    $(".sort-categories").addClass("d-none");
    $(".count-categories").removeClass("d-none");
    $(".count-categories").addClass("d-block");
    $(".count-categories").slideToggle(1000);  
  });
  
$(document).ready(function () {
  $("h6").hover(function () {
   $(this).addClass("active")
  });  
  $("h6").mouseout(function () {
      $(this).removeClass("active")
     });  
});


});
var rangeSlider = function () {
  var slider = $(".range-slider"),
    range = $(".range-slider__range"),
    value = $(".range-slider__value");

  slider.each(function () {
    value.each(function () {
      var value = $(this).prev().attr("value");
      $(this).html(value);
    });

    range.on("input", function () {
      $(this).next(value).html(this.value);
    });
  });
};
rangeSlider();

window.onload = function () {
  var paginationPage = parseInt($(".cdp").attr("actpage"), 10);
  $(".cdp_i").on("click", function () {
    var go = $(this).attr("href").replace("#!", "");
    if (go === "+1") {
      paginationPage++;
    } else if (go === "-1") {
      paginationPage--;
    } else {
      paginationPage = parseInt(go, 10);
    }
    $(".cdp").attr("actpage", paginationPage);
  });
};
