function changeText() {
 document.getElementById("heading").innerHTML="Who's Joe?";
}


function loadcontent(content) {
  alert (content)
  $("#game_content").html(content)
}

$(document).ready(function () {
  var playButton=$("#play_button")
  playButton.click(function(){

 $.ajax({
   url: "game.html",
   crossDomain: true,
   success:loadcontent
 })

 })

});
