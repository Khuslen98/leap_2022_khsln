// let a = "hi";
// let b = "hoy";

// console.log(a<b);

// console.log(a == b);

// console.log(a === b);

// let c = '10';
// let d = "10";

// console.log(c == d)
// console.log(c === d)

// let e = true;
// let f = false;

// console.log(e < f)
// console.log(e > f)

// console.log(e != f)

// console.log(c !== d)

// // ------TERNARYY OPERATOR- UNEN BOL NEG UILDEL HIIDEG, HUDAL BAIVAL BAS UUR NEGEN UTGA ILERHIILDEG-----

    
// let result = "10"
// if (result > 10) {
//     console.log("more than 10");
// } else {
//     console.log("less than 10");
// }

// result > 10 ? console.log('more than 10') : console.log('less than 10');

// // -------Gonchigsumlai shuluuluav------be like Gonchig swagg 

// const tip1 = "3000";
// const tip2 = "27500";
// const tip3 = "100000";

// if (5000 >= tip1 && 30000<= tip1) {
//     console.log("bodlogo bodoh 15%");
// } else {
//     console.log("busad bodoh 20%");
// }
// let tipResult1 = (5000 >= tip1 && 30000<= tip1) ? tip1 * 0.15 + tip1: tip1 * 0.2 + tip1;
// console.log(tipResult1)

// let tipResult2 = (5000 >= tip2 && 30000<= tip2) ? tip2 * 0.15 + tip2: tip2 * 0.2 + tip2;
// console.log(tipResult2)

// let tipResult3 = (5000 >= tip3 && 30000<= tip3) ? tip3 *0.15 +tip3: tip3*0.2 +tip3;
// console.log(tipResult3)

// const input = prompt("give me number")

// --------------------SURAGCHDIIN DUNG GARGAARAI----------------
// const studentName = prompt("put ur name here")
// const studentPoint = Number(prompt("give ur score"))

// // --------------MINII BICHSEN CODE---------------
// let studentResult1 = "Маш муу, сургуулаас хөөгдлөө"
// let studentResult2 = "Муу, сургуулаас хөөгдлөө"
// let studentResult3 = "Дунд, сургуулаас хөөгдлөө"
// let studentResult4 = "Сайн, сургуулаас хөөгдлөө"
// let studentResult5 = "Маш сайн, сургуулаас хөөгдлөө"
// let studentResult6 = "Маш маш маш маш маш сайн, сургуулаас хөөгдлөө"

// if (studentPoint>60 && studentPoint>70) {
//     alert (studentResult2)
// } else if (studentPoint<60 && studentPoint>0) {
//     alert (studentResult1)
// } else if (studentPoint>70 && studentPoint>80) {
//     alert (studentResult3)
// } else if (studentPoint>80 && studentPoint>90) {
//     alert (studentResult4)
// } else if (studentPoint>90 && studentPoint>100) {
//     alert (studentResult5)
// } else if (studentPoint>100) {
//     alert (studentResult6)
// }
// -------------------BAGSHIIN BICHSN CODE---------------
// let studentResult = "Маш муу, сургуулаас хөөгдлөө"

// if (studentPoint < 60) {
//     console.log(studentResult);
// } else if (studentPoint >= 60 && studentPoint < 70) {
//     studentResult = "Муу, сургуулаас хөөгдлөө"
// } else if (studentPoint >= 70 && studentPoint < 80) {
//     studentResult = "Сайн, сургуулаас хөөгдлөө"
// } else if (studentPoint >= 80 && studentPoint < 90) {
//     studentResult = " сургуулаас хөөгдлөө"
// } else if (studentPoint >= 90 && studentPoint < 100) {
//     studentResult = "Сайн, сургуулаас хөөгдлөө"
// } else if (studentPoint >= 97 && studentPoint < 1000) {
//     studentResult = "Маш сайн, сургуулаас хөөгдлөө"
// }
// // alert(studentName + ' _ ' + studentPoint + ' _ ' + studentResult);

// console.log(`${studentName} - ${studentPoint} - ${studentResult}`);

// alert (`lorem hdfhjsafasjh \" \" fgaskjhfgasdkjhgfdsh gfajsdkhgdfjahskgdjhfdgasjkhfg \n \n sdhjfgasjgfas djdgfjg dsjhg \t \t \t \t \t \t fjhag fjhd gsh akjg fkhjadsg fjhksdag fjkhadsg`)

// ----------------URT OLOH------------------
// const str = "life, the universe and everything. " ;
// console.log(str.length)

// const registerNumber = prompt("register dugaaraa oruulna uu")

// if (registerNumber.length==10) {
//     alert("right")
// } else {
//     alert("wrong") 
// }

// // ----------------chartAt index------------------ tuhain stringinn dotorh haracter medeh arga, ymar turliin medeelel baih ystoig zaaj ugdug "registeriin dugaariig todorhoilohod heregledeg"
// // const str = "life, the universe and everything. " ;
// // console.log(str.charAt(0));
// // console.log(str[1]) ;

// // ---MINII CODE----
// // console.log(registerNumber(0) +' _ ' + registerNumber[1])

// // ---BAGSH CODE---
// // console.log(registerNumber.charAt(0))
// // console.log(registerNumber[1])

// // ---------------TOM BOLON JIJIG USEGD HURVUULEH-----------
// // const str = "life, the universe and everything. " ;
// // console.log(str.toUpperCase());
// // console.log(str.toLowerCase());

// // -----------------TEMDEGT MOR HOLBOH---------------- CONCAT

// // let firstName = 'John';
// // let fullName = firstName.concat(' ' , 'Smith');
// // console.log(firstName);
// // console.log(fullName);

// // ---------------DED TEMDEGT MURUUD-------------- .substr

// let str= "JavaScript String"

// // -----------BAGSHIIN CODE------- EXERCISE UUNIIG NUMBER INTEGER ASHIGLAJ ZAS
// const registerNumber = prompt("register dugaaraa oruulna uu")

// // console.log(registerNumber.substring(0, 2));
// // console.log(registerNumber.substring(3, 10));

// let registerChar= registerNumber.substring(0,2);
// let registerNum= registerNumber.substring(3,10);

// // console.log(Number(registerChar));
// // console.log(Number("ABC"));

// if (!Number.isInteger(Number(registerChar)) &&  Number.isInteger(Number(registerNum)) && registerNumber.length== 10) {
//     console.log("Correct") 
// } else {
//     console.log("Wrong")
// }
// // console.log(Number("ABC"));
// // console.log(Number.isInteger(Number("ABC")));
// // console.log(Number("123456778"));
// // console.log(Number.isInteger(Number("123456778")));
// // if (registerNumber.substring(2-10)) {
// //     !=NaN={}
// }

// ------------------Phone Number EXERCISE-----------

// let cellNumber = prompt ("put ur numeeeer")
// let mngNumber = "+976"
// let cNumber = cellNumber.substr(4,12)
// let mngNum = mngNumber.substr(0,4)
// if (mngNumber== '+976' && Number.isInteger(Number(cNumber)) && cellNumber.length== 12) {
//     console.log("Correct") 
// } else {
//     console.log("Wrong")
// }

// -------------------BAIRSHIL OLOH----------------- INDEXOF