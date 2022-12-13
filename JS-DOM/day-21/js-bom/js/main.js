
// window.alert("Olo")

// console.log(window)

// // anker tag2 ийн үйлдэлийг хийх арга. 

// window.open("https://google.com", "Hello");

// window.confirm("hello");

// let result = window.confirm("doYouWannaQuit")
// console.log(result);

// Prompt болгон ашиглах арга. 

// window.prompt("hello")

// Set time out цаг хийх арга. Set time ouт функц ашиглах 

let alertButton = document.getElementById("alertButton");
let cancelButton = document.getElementById("cancelButton");
let timeoutID;

function showAlert(){
    timeoutID = setTimeout(alert, 3000, "setTimeout DEMO!");
}
function clearTimeout(){

}

alertButton.addEventListener("click", () =>{
    timeoutID = setTimeout(alert, 3000, "setTimeout DEMO!");
})
cancelButton.addEventListener("click," ()=> {
    console.log(timeoutID);
    clearTimeout(timeoutID);
    window.clearTimeout(timeoutID);

})
console.log(timeoutID);