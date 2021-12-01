var aud = document.getElementById("audio"); 
let track = false;
localStorage.setItem("track", false);

function playAud() { 
  aud.play(); 
  localStorage.setItem("track", true);
} 

function pauseAud() { 
  aud.pause(); 
} 

let play = document.getElementById("play");
play.onclick = playAud;

let pause = document.getElementById("stop");
pause.onclick = pauseAud;





