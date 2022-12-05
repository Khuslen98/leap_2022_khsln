let tegsh = [1, 2, 5, 6, 7, 8]

for( let i = 0; i <= tegsh.length; i++ ) {
    if(tegsh[i] % 2 == 0){
       console.log(tegsh[i])
    }
}
console.log(tegsh);

tegsh [1] = 6;

console.log(tegsh);

for( let i = 0; i < tegsh.length; i++ ) {
       tegsh[i] = tegsh[i] + 1;
    
}
console.log(tegsh);



// let playerNames = ['naruto', 'sasuke', 'kakashi','jiraiya']
// console.log(playerNames);
// playerNames[0] = 'boruto';
// console.log(playerNames);