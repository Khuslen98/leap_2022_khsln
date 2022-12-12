
let myButton = document.querySelector("#button")

let set = document.querySelector("#set");

let change = document.querySelector("#change");

myButton.addEventListener("click", () => {
    set.style = "background-color: red; padding: 20px; border-radius: 10px";
    change.style = "background-color: yellow; padding: 20px; border-radius: 10px";
} ) 