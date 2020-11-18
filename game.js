function loadcontent (){

}

$(document).ready(function () {
  var playButton = $("#play_button")
  playbutton.click(function(){
 $.ajax({url: "./game.html", success:loadcontent})


  })

});
