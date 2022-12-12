
// FUNCTION declaration 
function f() {
    console.log("hello world");
}

// function call буюу функц дуудах

f();
// .1

// f(x) = x * x => бол parameter буюу функцын гаднаас авдаг утга.

// f(x,y)= x2 + y2;

function f1(x) {
    console.log(Math.pow(x, 2));
}

f1(2);

// func
function f2(x, y) {
    console.log(Math.pow(x + y, 2))
}

f2(4, 3)


function f3(x, y) {
    console.log(Math.pow(x + y))
}

f3(4, 3)

// e = m * c2

function e(m, c) {
    console.log(m * Math.pow(c, 2))
}
const c = 300000;

e(85, c)
e(75, c)

// factorial f(x) = x!

function factorial(x) {
    let multiplication = 1;
    for (let i = 1; i <= x; i++) {
        multiplication = multiplication * i;
    }
    console.log(multiplication);
}
factorial(5)

// sinus cosinus function

function sin(x, y) {
    console.log(Math.cos('x') - Math.sin('y'));
}
sin(2, 3);

// x3 zereg devshuleh

function f(x) {
    console.log(Math.pow(x, 3) + Math.pow(x, 2) + (5 * x) + 12)
}

f(2)

function isEven(x) {
    if (x % 2 == 0) {
        console.log("it's even number");
    } else {
        console.log("it's odd number")
    }
}
isEven(5)
isEven(100)