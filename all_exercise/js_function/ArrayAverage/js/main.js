function findAverage(arr) {
    let sum = 0;
    arr.map(el => {
        sum += el

    })
    return sum / arr.length
}

const a = [1, 3, 5, 7, 8, 9, 0, 12]
console.log(findAverage(a))