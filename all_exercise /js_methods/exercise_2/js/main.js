let array = ["facebook", "google", "microsoft", "apple", "ibm", "oracle", "amazon"]

console.log("Sorting")
array.sort();
console.log(array);

console.log("Reverse")
const reversed = array.reverse();
console.log("reversed:", reversed)

console.log("Removing first element")
array.shift();
console.log(array)

console.log("Removing middle item")
// think later bruh
let middle = array.length / 2 - 1;
if (middle % 2 == 0) {
    array.splice(middle,2)

} else { 
    array.splice(middle,1)
}
console.log(array);
array.splice(0, array.length)
console.log(array)