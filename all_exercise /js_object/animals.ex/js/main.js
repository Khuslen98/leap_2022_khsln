console.log("animals exercise");

let animals = [
    {
        type: 'dog',
        sound: 'woof'
    },
    {
        type: 'cow',
        sound: 'moo',
    },
    {
        type: 'cat',
        sound: 'meow',
    }
]

function whatDoesTheFoxSay(array, animalType) {
    for (let i = 0; i < array.length; i++) {
        if(array[i].type === animalType){
            console.log(array[i].sound + ' - ' + array[i].sound + ' - ' + array[i].sound)
        }
        // console.log(array[i]);
    }
}
whatDoesTheFoxSay(animals, 'dog');

// console.log("Dog.barking")
whatDoesTheFoxSay(animals, 'cow');

// console.log("Cow.mooing")
whatDoesTheFoxSay(animals, 'cat');

// console.log("Cat.meowing")
// whatDoesTheFoxSay(animals, 'cat');