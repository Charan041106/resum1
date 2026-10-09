function printPage(){window.print();}
$(document).ready(function(){
  $(".card").hide().fadeIn(700);
  $(".card").css("transition","transform 0.3s ease").hover(
    function(){$(this).css("transform","translateY(-5px)");},
    function(){$(this).css("transform","translateY(0)");}
  );
});