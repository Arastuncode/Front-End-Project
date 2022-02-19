$(function(){

    console.log("!");
    
    var clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
          stop: function() {
            $('.message').html('The clock has stopped!')
          }
        }
    }); 
    clock.setTime(220880);

    

// countdown mode
clock.setCountdown(true);

// start the clock
clock.start();

})
    
// set time


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})




