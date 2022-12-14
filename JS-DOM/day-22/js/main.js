// call back function 

function add (x, y) {
    return x + y; 
}
function print(f) {
    let x = 3;
    let y = 2;
    console.log(f(x,y))
}
print(add)

let x = () => {
    console.log("arrow Function")
}
setTimeout (x, 3000)

setInterval 
function startInterval(){
    let now = newDate()
    
}