let row1 = [ "x", "o", "x"];
let row2 = [ "o", "o", "x"];
let row3 = [ "x", "x", "o"];
console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe = [[ "x", "o", "x"],[ "o", "o", "x"],[ "x", "x", "o"] ]
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);

tictactoe[prompt("x")][prompt("y")] = prompt("x or o");
// tictactoe- ийн бүх мөрний элемэнт хэвлэж харуулна уу

for (let i = 0; i <tictactoe.length; i++) {
    // console.log(tictactoe[i]);
    let output = ''
    for (let j = 0; j < tictactoe[i].length; j++){
        // console.log(tictactoe[i][j]);
        output = output + "| " + tictactoe[i][j] + " |";
    }
    console.log(output);
} 

