let arr1 = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let tegsh = 0;
let sondgoi = 0;
for (ar of arr1) {
    if (ar % 2 == 0) {
        tegsh++;
    } else {
        sondgoi++;
    }
}
console.log(tegsh);
console.log(sondgoi);
