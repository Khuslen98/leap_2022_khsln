const student = [
    {
        name: "Khangai",
        birthOfYear: 1982,
        hobby: "karate",
        single: false
    },
    {
        name: "Jigmed",
        birthOfYear: 1983,
        hobby: "Jims Tuuh",
        single: false
    },
    {
        name: "Togmid",
        birthOfYear: 2005,
        hobby: "Jims ideh",
        single: true
    }
]
let age = 2022 - student[i].birthOfYear;
// function findOlderStudents(array) {
//     for (let i = 0; i < array.length; i++) {
//         // let age = 2022 - array[i].birthOfYear;
//         if (age > 20) {
//             console.log(array[i].name);
//         }
//     }

// }
// function age(array){
//     for (let i = 0; i < array.length; i++) {
//         let age = 2022 - array[i].birthOfYear;
//         console.log("age");
//     }
//     // console.log("age")
// }

if (age < 20) {
    console.log("too young")
} else {
    console.log("older")
}

age < 20 ? console.log("too young") : console.log("older");


findOlderStudents(student)