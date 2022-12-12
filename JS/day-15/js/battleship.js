// game setup

// user should guess number

// we need to create new ship on the board

// | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
// | x | x | o | o | o | x | x |

// let guesses = 0;
// let isSunk = false;
// let hit = 0;

// let location1 = 2;
// let location2 = 3;
// let location3 = 4;

// let locations = [false, false, true, true, true, false, false];


// for (let count = 0; count < 7 ; count++ ) {
//     console.log(locations[count]);
    
// }
// while (!isSunk) {
//     console.log("Game begins")

//     let userGuess = Number(prompt("Give me TARGET!, LET ME KILL IT SOLDAT"))
//     guesses = guesses + 1; 
//     if (guesses > 6 ) {
//         console.log(guesses);
//         break
//     }
//     if (location1 == userGuess) {
//         alert("Hit");
//         location1 = -1;
//     } else if (location2 == userGuess){
//         alert("Hit");
//         location1 = -1;
//     } else if (location3 == userGuess){
//         alert("Hit");
//         location3 = -1;
//     }
//     if (userGuess > 0 && userGuess < 7) {
//         console.log(userGuess);
//         if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
//             hit = hit + 1;
//             if (location1 == userGuess) {
//                 location1 = -1;
//             }
//             if (location2 == userGuess) {
//                 location2 = -1;
//             }
//             if (location3 == userGuess) {
//                 location3 = -1;
//             }
//         } else {
//             alert("u miss");
//         }
//         console.log(hit)
//         if (hit == 3) {
//             isSunk = true;
//         }
//     } else {
//         alert(" Gib us number between 0 to 6")
//     }
//     if (location1 == userGuess) {
//         alert("Hit")
//     }

// }

// if (isSunk && guesses < 6 ) {
//     alert("you won")
// } else if (guesses > 6) {
//     alert("you loss")
// } else {
//     alert("u lost")
// } 
// console.log(" Game Ends bruh")
