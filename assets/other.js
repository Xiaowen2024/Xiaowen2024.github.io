var aud = document.getElementById("audio"); 
var track = localStorage.getItem("track");
function playAud() { 
  aud.play(); 
} 

function pauseAud() { 
  aud.pause(); 

} 

window.onscroll = function(){
  if (track){
   playAud();
  }
}

