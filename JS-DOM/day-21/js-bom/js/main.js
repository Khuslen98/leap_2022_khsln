
// // window.alert("Olo")

// // console.log(window)

// // // anker tag2 ийн үйлдэлийг хийх арга. 

// // window.open("https://google.com", "Hello");

// // window.confirm("hello");

// // let result = window.confirm("doYouWannaQuit")
// // console.log(result);

// // Prompt болгон ашиглах арга. 

// // window.prompt("hello")

// // Set time out цаг хийх арга. Set time ouт функц ашиглах 



// // function showAlert(){
// //     timeoutID = setTimeout(alert, 3000, "setTimeout DEMO!");
// // }
// // function clearTimeout(){

// // }

// // alertButton.addEventListener("click", () =>{
// //     timeoutID = setTimeout(alert, 3000, "setTimeout DEMO!");
// // })
// // cancelButton.addEventListener("click," ()=> {
// //     console.log(timeoutID);
// //     clearTimeout(timeoutID);
// //     window.clearTimeout(timeoutID);

// // })
// // console.log(timeoutID);

// setInterval(start)

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
}, 8000);

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
