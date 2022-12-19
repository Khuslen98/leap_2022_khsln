let startBtn = document.querySelector("#start");
let pauseBtn = document.querySelector("#pause");
let stopBtn = document.querySelector("#stop");

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let secTenth = document.querySelector("#secTenth");

let timer = new easyTimer.timer();

timer.addEventListener("secondTenthsUpdated", () =>{
    const obj = timer.getTimerValues();

    hours.innerText = obj.hours.toString();
    minutes.innerText = obj.minutes.toString();
    seconds.innerText = obj.seconds.toString();
    secTenth.innerText = obj.secTenth.toString();
})

startBtn.addEventListener("click", () => {
    timer.startBtn({
        precision: "secondsTenth"
    })

})

pauseBtn.addEventListener("click", () => {
    
})

stopBtn.addEventListener("click", () => {
    
})