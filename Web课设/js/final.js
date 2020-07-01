function checkVideo(){
    let myVideo = document.createElement('video');
    if(myVideo.canPlayType){
        if('' !== myVideo.canPlayType('video/mp4;codecs="avc1.64001E"')){
            console.log('support H.264');
        }

        if('' !== myVideo.canPlayType('video/ogg;codecs="vp8"')){
            console.log('support vp8');
        }

        if('' !== myVideo.canPlayType('video/ogg;codecs="theora"')){
            console.log('support theora');
        }
    }else{
        console.log('not support video check!');
    }
}

window.onload = function(){
    checkVideo();
}

function showInfo(){
    let myA = document.getElementById('videoControl');
    console.log('currentSrc', myA.currentSrc);
    console.log('currentTime', myA.currentTime);
    console.log('duration', myA.duration);
    console.log('ended', myA.ended);
    console.log('played', myA.played);
    console.log('paused', myA.paused);
    console.log('volume', myA.volume);
    console.log('seeking', myA.seeking);
}
function playOrPause() {
    let myA2 = document.getElementById('audioId');
    let myI = document.getElementById('btnId');
    if(myA2.paused) {
        myA2.play();
        myI.value = 'pause';
    } else {
        myA2.pause();
        myI.value = 'play';
    }
}
function alert1() {
    window.alert("计科1704班鲍星灿")

}