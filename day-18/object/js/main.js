let rabbit1 = {
    color: "white",
    rName: "Chandaga",
    gender: "male",
    age: "2",
    jump: function(){
        console.log("i can't jump");
    },
    sayMyName: function(myName){
        console.log(`Your name is ${myName}`)
    }
}
console.log(rabbit1);

let rabbit2 = {
    color: "pink",
    rName: "bujin",
    gender: "female",
    age: "1.9",
    jump: function(){
        console.log("i can jump")
    }
}

console.log(rabbit2);

let rabbits = [rabbit1, rabbit2]

console.log(rabbits);

// want to know rabbit's color, what should i do
console.log(rabbit1.color);
rabbit1.color = "shavhaitai"
console.log(rabbit1.color);
rabbit1.sayMyName("Khuslen")


// object dotor function nemj oruulah zaaval ()- haalt tavih shaardlagatai
rabbit1.jump()
rabbit2.jump()
