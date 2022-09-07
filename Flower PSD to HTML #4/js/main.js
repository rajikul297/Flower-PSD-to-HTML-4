//part (3no) bx slider
$(document).ready(function(){
    //slider
    $('.slider_area').bxSlider();
    
//    sticky menu
    $(".js_slider_section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        };
    });
    
  });

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
