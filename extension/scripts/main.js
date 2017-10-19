$(document).ready(function(){
    $(".content").click(function(){
        $(".calendar").fadeToggle("3000");
    });
});

$(function(){
    $(".content").children().click(function(e){
        e.stopPropagation()
    });
});

$(document).ready(function(){
  $("#time-header").fadeIn("slow");
});
