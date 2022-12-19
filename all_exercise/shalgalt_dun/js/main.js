function findOntsDumd(points) {
    if (points < 60) {
        return "Very Bad";
    } else if (points >= 60 && points <70) {
        return "satisfied";
    }
    else if (points >= 70 && points < 80) {
        return "satisfied2";
    }
    else if (points >= 80 && points < 90) {
        return "satisfied3";
    }
    else if (points >= 90 && points <= 100) {
        return "satisfied5";
    } else {
        return "Please give me points between 0 to 100"
    }
}

let inputPoint = Number(prompt("gib me point"));
let inputPointStudentName = prompt("name please");
let pointResult = findOntsDumd(inputPoint);

console.log(`${inputPoint}-${inputPointStudentName} - ${findOntsDumd}1`)