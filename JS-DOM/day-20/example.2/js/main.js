
// id gaar сонгон авч цаг тодорхойлдог болгов.
document.getElementById("demo").innerHTML= "Date : " + Date();

document.getElementsByTagName("img").src= "dogPicture.jpg";

// query selector ашиглан зураг оруулж ирэв. 

document.querySelector("img").src= "img/perceptual-standard.jpeg"

document.querySelector("img").style = "border-radius: 20px; width: 400px; height:200px; margin-top: 90px"

// HTML Ээс хамаарахгүйгээр шинэ текст оруулах. 

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");

// appendChild нь элемент нэмэх 
newDiv.appendChild(newContent);


// h1 Дотор утга оруулах 
const h1 = document.querySelector("h1");
h1.appendChild(newDiv);

// body tag дотор тухайн h2 tag нэмж оруулах. 
const main = document.getElementsByTagName("body");

main[0].appendChild(newDiv);

