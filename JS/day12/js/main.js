// // let a ="hi";
// // let b ="hi";

// // console.log(a<b);

// // console.log(a == b);

// // console.log(a === b);

// // let c = 10;
// // let d = "10";
// // console.log(c == d)
// // console.log (c === d);
// // console.log(c !== d)

// // let e = true;
// // let f = false;

// // console.log(e < f);
// // console.log(e > f);

// // let result = 10;
// // if (result > 10) {
// //     console.log("more than 10");
// // } else {
// //     console.log("less than 10")
// // }

// // result > 10 ? console.log("more than 10") : console.log("less than 10")



// // const tip1 = 3000;
// // const tip2 = 27500;
// // const tip3 = 100000;


// // let tipResult2 = (5000 >= tip2 && 30000<= tip2) ? tip2 * 0.15 + tip2: tip2 * 0.2 + tip2;
// // console.log(tipResult2);

// // const input = prompt("give me your money")

// // let tipResult3 = (5000 >= tip2 && 30000<= tip2) ? tip2 * 0.15 + tip2: tip2 * 0.2 + tip2;

// const studentName = prompt("give me your student name");
// const studentPoint = Number(prompt("Give me your score"));

// let studentResult = "Mash muu \n";

// if(studentPoint<60){
//     alert("YourScore:" + studentResult + ("YourName:" + studentName))
// }else if(60<= studentPoint && studentPoint <= 70){
//     alert("YourScore: D" + ("YourName:" + studentName))
// }else if(70<= studentPoint && studentPoint <= 80){
//     alert("YourScore: C" + ("YourName:" + studentName))
// }else if(80<= studentPoint && studentPoint <= 90){
//     alert("YourScore: B" + ("YourName:" + studentName))
// }else if(90<= studentPoint && studentPoint <= 100){
//     alert("YourScore: A% " + ("YourName:" + studentName))
// }

// console.log(`${studentName} - ${studentPoint} - ${studentPoint} `);

// console.log('its log');
// console.error('its error');
// const str = "Life, the universe and everything.";
// console.log(str.length);


// const registerNumber = prompt ("Register Number");

// if (registerNumber.length != 10){
//     alert("The Register number length is not correct")
// }else{
//     alert("The length of register number is correct")
// }

// const str = "Life, the universe and everything.";


// console.log(str.substr(0, 2));
// console.log(str.substr(11, 6))
// console.log(str.charAt(0));
// console.log(str[2]);

// const str1 = "Life and Universe";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());








// let firstName = "John";
// let fullName = firstName.concat(' ','Smith');
// console.log(fullName);
// console.log(firstName);

// let str = "JavaScrip String";
// console.log(str.substr(0, 10));
// console.log(str.substr(10, 6));



console.log(Number("abc"));
console.log(Number.isInteger(Number("abc")));
console.log(Number("123123123"));
console.log(Number.isInteger(Number("12123123")));




// exercises



const registerNumber = prompt ("Register Number");



if (registerNumber.length == 10 && Number.isInteger && Number){
    alert("The length of register number is correct")
}else{
    alert(  "The Register number length is not correct")
}