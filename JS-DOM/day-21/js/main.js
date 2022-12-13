function validation(inputs) {
    let password = inputs.psw.value;
    let repeatPassword = inputs.repeatPsw.value;
    let email = inputs.email.value;

    if (password === repeatPassword && email.includes("@") && email.includes(".")&& password.length <= 8 && repeatPassword.length <= 8) {
        return true
    }
// ийм байдлаар амархан бичих боломжтой байна. би бодохдоо тус тусад нь if  бичнэ гэж бодож байсан нь өөртөө илүү ажил удаж байжээ.

        // энд та нарт бүх input орж ирж байгаа зөв эсэхийг дараах байдалаар шалгана
        // 2 password хоорондоо адил байгаа эсэх
        // password ийн урт 8с урт байх ёстой
        // email дотор заавал @ болон . орсон байх
        // эдгээр нөхцөл биелсэн бол true буцаана

        //жишээ хэрэглээ
        console.log("Email input ийн урт: ", inputs.email.value.length);
    return false;
}

// бүх input үүдийг inputs-д авч байна
const inputs = document.getElementsByTagName("input");
// хэдэн input байгааг тоолж байна
const howManyInputs = document.getElementsByTagName("input").length;
const eMail = document.getElementsByClassName("eMail");


for (let i = 0; i < howManyInputs; i++) {
    // input бүрт addEventListener өгч change эвэнтийг сонсож байна
    inputs[i].addEventListener("change", () => {
        // input ийн утга өөрчлөгдөх бүрт 3н input үүдийн утгуудыг харж болно
        //   for (let j = 0 ; j < howManyInputs; j++) {

        //   }
        console.log("Email-ийн утга: ", inputs.email.value);
        console.log("Password-ийн утга: ", inputs.psw.value);
        console.log("repeatPsw-ийн утга: ", inputs.repeatPsw.value);

        // бүх input үүдийг авч зөв эсэхийг шалгах фүнкц дуудаж байна
        if (validation(inputs)) {
            document.querySelector(".registerBtn").disabled = false;
        }
    });
}
