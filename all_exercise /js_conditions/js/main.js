let aTeam = [86, 108, 89];
let bTeam = [88, 91, 110];

let sum1 = 0;
for (number1 of aTeam) {
    sum1 += number1;
}

let averageAteam = sum1 / aTeam.length;
console.log(averageAteam);

let sum2 = 0;
for (number2 of bTeam) {
    sum2 += number2;
}

let averageBteam = sum2 / bTeam.length;
console.log(averageBteam);


if (averageAteam > averageBteam) {
    console.log("Ateam wins")
} else {
    console.log("Bteam wins")
}



