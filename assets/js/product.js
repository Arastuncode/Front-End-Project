/*$(function () {
  $(document).on("click", ".tab-menu .header div", function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
    let id = $(this).attr("data-id");
    $(".tab-menu .content div").addClass("d-none");
    $(`.tab-menu .content [data-id="${id}"]`).removeClass("d-none");
  });
});
*/

function openCity(evt, cityName) {
    var i,tabcontent,tablinks;
    tabcontent =document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className=tablinks[i].className.replace(".active"," ") ;   
        tablinks[i].style.color = "black";
    }
    document.getElementById(cityName).style.display="block";
    evt.curreentTarget.className += "active";
    
}