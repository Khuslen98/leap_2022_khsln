// ---------------Math.PI----------------
// ----NEW---  
console.log(Math.PI) 

console.log(Math.PI.toFixed(6))     
// -----BUTARHAI TOOG BAGASGAH ZORILGOTOI BUYU TO FIXED----

const budget = 1_000_000_000;
// ----BICHIH ARGA N UURTUU ZORIULJ TOOLHODHETSUU TOOG BICHDEG BAINA---
console.log(budget);

const degrees = 45; 
let rad = degrees * (Math.PI/180);
// ----Math.PI ashiglah arga----

console.log(rad);

console.log(rad.toFixed(4));
// -----ashiglasan baidal BUTARHAI TOOG BAGASGAH ZORILGOTOI BUYU TO FIXED----

// ----TUHAIN UTGA HASAH GARSAN TOHIOLDOLD NEMEH BOLGOH ARGA----
let a = 5, b = 9;
const diff = Math.abs(a - b);
console.log(diff);
// ----INGEJ HIISNEER -4 GARAH HEDII CH NEMEH 4 BOLGON AVDAG ABS UTGA BAIHNE---

// ----CEIL ASHGLAH----
console.log(Math.ceil(.98))
// ---GEVEL OIROLTSOO BUYU 1 BOLGON AVNA----
console.log(Math.ceil(6.7))
// ---GEVEL OIROLTSOO BUYU 7 BOLGON AVNA----
console.log(Math.ceil(7.5))
// ---GEVEL OIROLTSOO BUYU 8 BOLGON AVNA----
console.log(Math.ceil(-7.8))
// ---GEVEL OIROLTSOO BUYU -7 BOLGON AVNA----


// ----floor ASHGLAH----
console.log(Math.floor(.98))
// ---GEVEL OIROLTSOO BUYU 0 BOLGON AVNA----
console.log(Math.floor(6.7))
// ---GEVEL OIROLTSOO BUYU 6 BOLGON AVNA----
console.log(Math.floor(7.5))
// ---GEVEL OIROLTSOO BUYU 7 BOLGON AVNA----
console.log(Math.floor(-7.8))
// ---GEVEL OIROLTSOO BUYU -8 BOLGON AVNA----

// ----round ashiglah----

console.log(Math.round(.9))
// ---GEVEL 1 BOLGON AVNA----
console.log(Math.round(6.7), Math.round(-6.4), Math.round(-6.79), Math.round(-6.7))
// ---GEVEL 6 -6 -7 -7 BOLGON AVNA----

// -----toon dundaas hamgiin ihiig avah----

console.log(Math.max(-7.8 , -9 , -10))

// -----toon dundaas hamgiin bagiig avah----

console.log(Math.min(-7.8 , -9 , -10))

// ---zereg oloh arga-----
console.log(Math.pow(7,2))
// --gevel 7 gin 8 zereg bolgon avna---

// ----Simple tomyo bichij oruullalala---
    // const x= Number(promp("Gib me X"))
    // const y= Number(promp("Gib me Y"))


    // const z= Math.sqrt(Math.pow(y,2) - Math.pow(x,2))
    // console.log(z);

console.log(Math.ceil(Math.random()* 100))

// --- +1 ugj baij 1 ees 100 hurtel toonoos random 1 toog gargaj ogdog baihne----

console.log(Math.floor(Math.random()* 100 + 1))

// ---GEVEL FLOOR ASHIGLAJ TOOG GARGAJ IRJ BAINA---


// -----JS NUMBER EXER-----

// const x= Number(prompt("Gibx"))
// const y= Number(prompt("Giby"))

// if (x<y){
//     console.log(Math.floor(Math.random()* y + x))
// } else if (y<x) {
//     console.log(Math.floor(Math.random()* x + y))
// }

// // ---Tuhain utgiig 50 udaa hevlev----
// let z = (Math.floor(Math.random()* y + x))

// while (z<=50){
//     console.log(z);
//     z = z + 1;
// }
// console.log("Loop Ended")


// ---UURIN ARGAAR NUHTSUL SHALGUULAN HIISEN BAINA---

// const ou= Math.abs(x - y)
// console.log(ou)

// ---Absolte utga avan hisner nuhtsul shalguulahgu mun baga murund oruulan bichij bolj baina---

// ---- WHILE LOOP----
// while- nuhtsuluud zuvhun true uyd l davtalt hiigddeg

// let count = -1;
// while (count <=100) {
//     console.log(count);
//     count = count +1;
// }
// console.log("loop ended")

// ---Hervee count = count + 1 gej bichihgu bol computer shatna---

// let Quest = prompt("Do you wanna play Worthy player")

// let mn = ("yes");
// let nm = ("no");

// while (Quest == mn){
//     alert = (Thanks);
//     prompt("Do you wanna play Worthy player")
// }
// console.log ("Game Over bet")

// -----bagshiin code------

// let Quest = prompt("Do you wanna play Worthy player")

// let answer = "yes";

// while(answer == "yes") {
//     answer = prompt("Do you wanna play Worthy player").toLowerCase();
//     if (answer == "yes") {
//         alert("thanks")
//     }
// }
// console.log ("game over");

// ---------exercises-------

let max = Number(prompt("give number"));
let count = 1;

let sum = 0 ;


while (count < max) {
    console.log(count);
    count = count + 1;
    sum = sum + count;
    console.log(sum)                                                                                        ;
    console.log(count)
}
let max = 10;
let start = 0; 
while (start < max){
    start%2 == 0;
    console.log(start)
    start= start + 1; 
    console.log(start)
}
console.log(start)