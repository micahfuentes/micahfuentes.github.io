// UNUSED FUNCTIONS
// function changePicture() {
//     document.getElementById("pic").src="/images/";
// }

// function backToPicture() {
//     document.getElementById("pic").src="/images/piano.jpg";
// }

function play() {
    var musicBtn = document.getElementById("audio");
    musicBtn.play();
}
function stop() {
    var audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
}
// JQuery
$(document).ready(function(){
    $(".btnFadeToggle").click(function(){
        $(".textFade").fadeToggle();
    });
});

$(document).ready(function() {
    $('#hideFirst').hide();
 });