// ---------------fibo dugaar oloh arga---------
let f1 = 0 ; 
let f2 = 1 ; 
let n = 2 ;
let m = Number(prompt("number please"))

for ( ; 0<=n<=m; ) {
    let f3 = f1 + f2;
    f1 = f2; 
    f2 = f3; 
    n = n + 1 
}