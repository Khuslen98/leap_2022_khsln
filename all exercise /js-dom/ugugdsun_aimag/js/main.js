
// хамгийн эхний элемент хэвлэх

console.log(document.getElementById("aimag-101").innerHTML)

// хамгийн сүүлийн элемэнт хэвлэх 

console.log(document.getElementById("aimag-522").innerHTML)

// Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх

console.log(document.getElementById("aimag-315").innerHTML)

// Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)

document.getElementById("aimagNames").style = "font-size: 1rem; padding: 100px; margin: 30px"
// Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  (1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар ) Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм.

for (let i = 0; i < document.getElementsByClassName("kangai").length; i++) {
    document.getElementsByClassName("kangai")[i].style = "font-size: 35px; background-color: magenta"
}

for (let i = 0; i < document.getElementsByClassName("gobi").length; i++) {
    document.getElementsByClassName("gobi")[i].style = "font-size: 25px; background-color: gold"
}

for (let i = 0; i < document.getElementsByClassName("tuv").length; i++) {
    document.getElementsByClassName("tuv")[i].style = "font-size: 25px; background-color: silver"
}

for (let i = 0; i < document.getElementsByClassName("zuun").length; i++) {
    document.getElementsByClassName("zuun")[i].style = "font-size: 25px; background-color: aqua"
}
console.log(document.getElementById("aimagNames").id);
const liLength = document.getElementById("aimagNames").getElementsByTagName("li").length;
console.log(document.getElementById("aimagNames").getElementsByTagName("li")[liLength - 7].innerHTML);

console.log(document.getElementsByTagName("span"))
document.getElementsByTagName("span")[0].innerHTML = "hahahah";

// Утгаар нь таньдаг код бичиж оруулаваа

for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: gold; ; border-radius: 8px; color: white; padding: 10px; "
    } else if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: silver; border: 2px solid gray; border-radius: 8px; color: white; padding: 10px;"
    } else if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: teal ; border: 2px solid gray; border-radius: 8px; color: white; padding: 10px;"
    } else if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: salmon; border: 2px solid gray; border-radius: 8px; color: white; padding: 10px;"
    } else if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-5")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: orange; border: 2px solid gray; border-radius: 8px; color: white; padding: 10px;"
    }
}
// query- selector avah 
console.log(document.querySelector("#aimagNames"));

console.log(document.querySelector(".kangai"));


// Энэ хоёр selector ижил утга авахаар байв ч цаад төрөл нь өөр өөр юм.
console.log(document.querySelectorAll(".kangai"));
// node list ээр хөрвүүлж авдаг.
console.log(document.getElementsByClassName("kangai"))
// HTML collection гэсэн - өөрөөр авдаг байна. 


