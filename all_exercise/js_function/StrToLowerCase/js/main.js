function strToLowerCase(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toUpperCase()
    }
    return arr
}
const a = ["A", "B", "F", "E"];
console.log(strToLowerCase(a));