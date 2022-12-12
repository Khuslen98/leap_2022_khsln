function pow (number, exponent) {
    let multiply = number; 
    for (let i = 1; i<=exponent; i++) {
        multiply = multiply *number; 
    }
    return multiply;

}
let result = pow(2,3)
console.log(result);
console.log(pow(2,4));
console.log(pow(5, 2))