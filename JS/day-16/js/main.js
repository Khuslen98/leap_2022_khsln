// let number = "1, 4, 5, 6, 8, 10, 3, 2, 10, 9"
// let arr1 = number.split('');

// for(let i = 0; i<arr1.length; i ++)  {
//     if( i % 2 == 0) {
//         arr1[i] = arr1[i] + 4;
//     } else {
//         arr1[i]= arr1[i] - 5;
//     }
// }
// console.log(arr1);

let arr1 = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9];
console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 !== 0) {
        arr1[i] = arr1[i] + 4;
    } else {
        arr1[i] = arr1[i] - 5;
    }
}
console.log(arr1);


function isEven(x) {
    console.log("the number is" + x)
    if(x % 2 == 0){
        // console.log ("it's even number");
        return true;
    } else {
        // console.log("it's odd number")
        return false;
    }
}

console.log(isEven(arr1[0]));
console.log(isEven(arr1[1]));


// isEven(5)
// isEven(100)

function addTwoNumbers(x, y) {
    return x + y;
}
console.log(addTwoNumbers(4, 5))

function mulTwoNumbers(x, y) {
    return x * y;
}
console.log(mulTwoNumbers(4, 5))

function mulThreeNumbers (x, y, z) {
    const m = x * y * z;
    return m;
}
const result= mulThreeNumbers(4, 5, 6);

console.log(result)

console.log(arr1)