

let alertButton = document.getElementById("alertButton");
let cancelButton = document.getElementById("cancelButton");
let timeoutID;

alertButton.addEventListener("click", () => {
    timeoutID = setTimeout(alert, 3000, "setTimeout Demo")
})

cancelButton.addEventListener("click", () => {
    console.log(timeoutID);
    clearTimeout(timeoutID);
})
console.log(timeoutID);

setTimeout(() => {
    console.log("Time out is running");
}, 5000);

let counter = 0;

function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById("myTimer");
    myTimer.innerHTML = now;
    counter++;
}

let startTimer = document.getElementById("startTimer")
startTimer.addEventListener("click", runTimeInterval);

function runTimeInterval (){
    window.setInterval(startInterval)
}
