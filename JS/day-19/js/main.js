console.log('Day-19: Object and Methods')


let teacher = {
    firstName: 'Dolgor',
    lastName: 'Dondog',
    age: 35,
    experience: 10,
    children: [],
    isMarried: true,
    address: {
        district: 'BGD',
        khoroolol: '2-r',
        khoroo: '1-r',
        houseNumber: '016',
        doorNumber: '4'
    },
    GPA: 94.5,

    introduction: function(){
        console.log(`Миний нэрийг ${this.lastName}-ийн ${this.firstName} гэдэг.
        Би ${this.age} настай. Би ${this.experience} жилийн ажлын туршлагатай.
        Би ${this.address.district}-т амьдардаг.`);
    }
}

teacher.introduction()

let teacherDolgorclone = teacherDolgor;
teacherDolgorclone.firstName = "Dolgor clone";
console.log(teacherDolgor.firstName);
console.log(teacherDolgorclone.firstName);

let teacherDolgorRealclone = {...teacherDolgor};
teacherDolgorRealClone.firstName = "Dolgor Real Clone";
console.log(teacherDolgorRealClone.firstName);
console.log(teacherDolgor.firstName);


console.log(Object.keys(teacherDolgor));
console.log(Object.values(teacherDolgor));

let newTeacher = Object.create({
    firstName: "ojoj",
    lastName: "gogojojo",
})
console.log(newTeacher);

Object.assign({

}, newTeacher)