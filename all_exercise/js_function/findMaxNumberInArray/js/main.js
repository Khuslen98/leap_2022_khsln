function findNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if(num === arr[i]){
            return i
        }
    }
    return -1;
}
const a = [1, 2, 3, 4];