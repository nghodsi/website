function changeText() {
 document.getElementById("heading").innerHTML="Who's Joe?";
}


function loadcontent1(content) {
  alert (content)
  $("#game_content").html(content)
}

$(document).ready(function () {
  var playButton=$("#play_button")
  playButton.click(function(){

 $.ajax({
   url: "game.html",
   crossDomain: true,
   success:loadcontent1
 })

})

});

function loadcontent2(content) {
  alert (content)
  $("#sans_fight").html(content)
}

 $(document).ready(function () {
   var playButton=$("#sans_button")
   playButton.click(function(){

  $.ajax({
    url: "sans.html",
    crossDomain: true,
    success:loadcontent2
  })
})

});
