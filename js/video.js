var ppbutton = document.getElementById("myBtn");
ppbutton.addEventListener("click", playPause);
myVideo = document.getElementById("tree");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        ppbutton.innerHTML = "Pause Video ";
        }
    else  {
        myVideo.pause(); 
        ppbutton.innerHTML = "Play Video";
        }
} 