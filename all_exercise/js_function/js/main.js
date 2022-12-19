// өгөгдсөн 2 тооны ихийг олох 

let x = 5; 
let y = 6;

if (x<y) {
    console.log(y + " big " + x);
} else {
    console.log(x + " big "+ y);
}

function findMax(x, y) {
    if(x < y) {
        console.log(y + " big than " + x);
    } else {
        console.log(x + " big than "+ y);
    }
}

findMax(Number(prompt("X")) ,Number(prompt("y")))