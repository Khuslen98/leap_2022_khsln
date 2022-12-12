// // let a = prompt("gib me number"); 
// // let b = prompt("secon one"); 

// // 2 toonii bagiign oloh arga

// function findMin (a, b){
//     if (a < b) {
//         return true; 
//     } else {
//         return false;
//     }
// }
// console.log(findMin(2,4))

// // print ashiglah arga 

// function printArray(array) {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6]
// let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 0]
// let arr3 = [22, 33, 54, 75, 86, 97, 08, -9, -0]
// printArray(arr2); 
// printArray(arr); 
// printArray(arr3);

// let findArrayMax= function (arr2){
//     let max = -1;
//     for(let i = 0; i < arr2.length; i++){
//         if(max <= arr2[i]){
//             max = arr2[i];
//         }

//     }
//     return max;
// }

// function findArrayMax(array) {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// console.log(findArrayMax(arr2));

// find average oloh 

let arr = [1, 1, 1, 1, 1, 1, 1, 1] 
let findArrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    const average = sum/arr.length ;
    return average;
}
console.log(findArrayAverage(arr));
