// prime number

let input = Number(prompt("give me ur prime number"))

let temp = 0 ; 

for (let i = 2; i< Math.round(input/2); i++){
    if (input % i == 0) {
        temp = temp + 1; 
    }
}
if (temp == 0) {
    console.log("it's prime number")
} else {
    console.log("it's not")
}