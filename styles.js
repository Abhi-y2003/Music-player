let progess = document.getElementById("progress")
let song = document.getElementById("song")
let controlIcon = document.getElementById("controlIcon")
let audio = document.getElementById("song");
let vol = document.getElementById("volume");
let num = document.getElementById("num");

vol.oninput = function(){
    audio.volume = vol.value/100;
    num.innerHTML =vol.value;
}
song.onloadedmetadata = function(){

    progress.max = song.duration;
    progress.value = song.currentTime;
    
}

function playPause(){

    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime  = progress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");

}

