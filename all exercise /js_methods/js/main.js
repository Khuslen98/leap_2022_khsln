const shoppingCard = ["milk", "coffee", "tea", "honey"]
console.log(shoppingCard);
// // shoppingCard.unshift("meat");
// console.log(shoppingCard);
// // shoppingCard.splice(5, 0, "cigar");
// console.log(shoppingCard)

if (!shoppingCard.includes("meat")) {
    shoppingCard.unshift("meat");
}
console.log(shoppingCard);

if (!shoppingCard.includes("sugar")) {
    shoppingCard.push('sugar');
}
console.log(shoppingCard);

if (shoppingCard.includes("honey")) {
    let honey = shoppingCard.indexOf("honey");
    shoppingCard.splice(honey, 1);
}
console.log(shoppingCard);

if (shoppingCard.includes("tea")) {
    let tea = shoppingCard.indexOf("tea");
    shoppingCard.splice(tea, 1, "Green Tea" );
}
console.log(shoppingCard);