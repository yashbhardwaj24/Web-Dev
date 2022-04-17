// alarm voice 
var audio = new Audio('my_audio.mp3');
function ringBell(){
    audio.loop = true;
    audio.play();
}
const alarmSubmit = document.getElementById('alarmSubmit')
alarmSubmit.addEventListener('click',setAlarm)
const pause = document.getElementById('pause')
pause.addEventListener('click',setPause)
const play = document.getElementById('play')
play.addEventListener('click',setPlay)

function setPlay(){
    audio.play();
}
function setPause(){
    audio.pause();
}

function setAlarm(e){
    e.preventDefault()
    const alarm = document.getElementById('alarm')
    alarmDate = new Date(alarm.value)
    console.log(`setting alarm for ${alarmDate}`);
    now = new Date()
    let timetoAlarm = alarmDate - now
    console.log(timetoAlarm);
    if(timetoAlarm >= 0){
        setTimeout(() => {
            ringBell()
        }, timetoAlarm);
    }
}