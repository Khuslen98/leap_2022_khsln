// consle.log("array nethods");

// shift

let shiftArr = (arr) => {
    let tempArray = []
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            tempArray.push(arr[i])
        }
    }
    return tempArray;
}
let arr1 = [1, 2, 3]

console.log(shiftArr(arr1));

console.log("Unshift array algoritm")

let unshiftArray = function (arr, number) {
    let tempArray = [];
    tempArray.push(number);

    for (let i = 0; i < arr.length; i++) {
        tempArray.push(arr[i])
    }
    return tempArray;
}


let arr2 = [5, 6, 7];
console.log(unshiftArray(arr2, 3));


console.log("array unshift method")
const array1 = [1, 2, 3];
console.log(array1.unshift(4));
console.log(array1);

// function sortingAlgorithm(arr) {
//     let swap = false;
//     let i = 0
//     if (i >= 0 && i < n){
//         swap = false
//     }
//         for (let i = 0; i < arr.length; i++) {

//         }


// }

function arrayReverse(arr) {
    let tempArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        tempArray.push(arr[i]);
    }
    return tempArray;
}

let arrReverse = [4, 5, 1, 8]
console.log(arrayReverse(arrReverse));

const numbers = ["one", "two", "three"];
console.log("array1:", numbers);
const reversed = numbers.reverse();
console.log("reversed:", reversed);

const nameSlice = ["bat", "dorj", "purev", "davaa", "tomor"];
console.log(nameSlice.slice(2));
console.log(nameSlice);

function nameSliceFunc(arr, index) {
    let tempArray = []
    for (let i = 0; i < arr.length; i++) {
        tempArray.push(arr[i]);
    }
    return tempArray;
}
console.log(nameSliceFunc([1, 2, 3, 4, 5], 2))

const spliceNames = ["davaa", "lhagva", "purev", "byamba",];
spliceNames.splice(1, 0, "myagmar");
// 1 deh indexed shineer utga oruulj ireh arga
console.log(spliceNames);
spliceNames.splice(4, 0, "baaska");
console.log(spliceNames);