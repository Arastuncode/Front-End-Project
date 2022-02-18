
$(document).ready(function () {
    $("h6").hover(function () {
     $(this).addClass("active")
    });  
    $("h6").mouseout(function () {
        $(this).removeClass("active")
       });  
  });
  
  