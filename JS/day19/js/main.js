console.log("day19 object and methods");

let teacherDolgor= {
    firstName: "Dolgor",
    lastName: "Dondog",
    age: 35,
    experience: 10,
    children: [],
    isMarried:true,
    address:{
        distrect:"BGD",
        Khoroolol:"2-r",
        Khoroo:"1-r",
        houseNumber: "016",
        doorNumber:"4",
    },
    GPA:94.5,

    introduction: function(){
        console.log(`minii neriig ${this.lastName}-iin ${this.firstName} gedeg.
        Bi ${this.age} nastai. Bi ${this.experience}-iin ajliin turshlagatai.
        Bi ${this.address.distrect}-t amidardag`)
    }
}

teacherDolgor.introduction();

let teacherDolgorClone = teacherDolgor;

teacherDolgorClone.firstName = "dolgor clone";
console.log(teacherDolgor.firstName);
console.log(teacherDolgorClone.firstName);


let teacherDolgorRealClone = {...teacherDolgor};
teacherDolgorRealClone.firstName = "dolgor real clone";
console.log(teacherDolgorRealClone.firstName);
console.log(teacherDolgor.firstName);



console.log(Object.keys(teacherDolgor));
console.log(Object.values(teacherDolgor));


let newTeacher = Object.create({
    firstName: "firstName",
    lastName:"lastName",

})

console.log(newTeacher);

Object.assign({
    
}, newTeacher)