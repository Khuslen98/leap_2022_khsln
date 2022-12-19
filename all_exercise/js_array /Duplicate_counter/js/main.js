let number = '12341';
let arr2 = [0,0,0,0,0,0,0,0,0,0]
let arr1 = number.split('');
// [1,2,3,4,1]
// [0,1,2,3,4]
for(let i = 0; i<arr1.length; i++){
    
    let number = arr1[i];

    arr2[number] = arr2[number] + 1;
}
// console.log(arr2)
// for(let i = 0; i<arr2.length; i++){
//     console.log(i + " : " + arr2[i]);
// }
console.log(arr2);