var aud = document.getElementById("audio"); 

function playAud() { 
  aud.play(); 
  keep = true;
} 

function pauseAud() { 
  aud.pause(); 
} 

let play = document.getElementById("play");
play.onclick = playAud;

let pause = document.getElementById("stop");
pause.onclick = pauseAud;


