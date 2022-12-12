// // JS-dom-EVENT

// Миний санаа нь click ийг нь тоолоод 1 байвал цагаан өнгө, 2 байвал ногоон болгохоор зохиосон болно

// let myButton = document.getElementById("myButton");

// console.log(myButton);

// function changeBackgroundColorTeal() {
//     myButton.style = "background-color: teal"
// }
// function changeBackgroundColorWhite() {
//     myButton.style = "background-color: white"
// }
// let click = myButton.addEvent("click");

// if (click == 1) {
//     myButton.addEventListener("click", changeBackgroundColorTeal);
// } else if (click != 2) {
//     myButton.addEventListener("click", changeBackgroundColorWhite);
// }

// myButton.addEventListener("click", changeBackgroundColorTeal);
// myButton.addEventListener("click", changeBackgroundColorWhite);

// Багшийн томёо

// let color = "green";

// function changeBackgroundColorGreen() {

// }

// function changeColors() {
//     console.log("clicked");
//     if (color === "green") {
//         color = "white";
//         myButton.style = `background-color: ${color}`;
//     } else {
//         color = "green";
//         myButton.style = `background-color: ${color}`;
//     }
// }

// myButton.addEventListener("click", changeColors);


// This is arrow function
let arrowFunc = () => {
}

myButton.addEventListener("click", () => {
    myButton.style = "background-color: gold"
} ) 

// changeBackgroundColor();

// Form үүсгэв

let registerButton = document.querySelector("#register");

console.log(registerButton);

registerButton.disabled = true;
