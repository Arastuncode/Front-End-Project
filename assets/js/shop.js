$(document).ready(function(){
    $("i").click(function(){
        $(".ul").removeClass("d-none");
        $(".li").removeClass("far fa-plus");
        $(".li").addClass("fal fa-minus");
      $(".ul").slideToggle();
    });
  
  
  $("#1").click(function(){
    $(".sort-categories").removeClass("d-none");
  $(".sort-categories").slideToggle();
});
$("#2").click(function(){
  $(".count-categories").removeClass("d-none");
$(".count-categories").slideToggle();
});
});
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};