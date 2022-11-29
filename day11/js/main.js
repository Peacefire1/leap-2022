// let message = "Baby Shark, doo-doo, doo-doo"
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// let a = "Baby Shark"
// console.log(a)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)

// let nullVariable = null;
// let myDecision = true;
// // typeof   


// console.log(typeof 1 );
// console.log(typeof "Hello");
// console.log(typeof undify);
// console.log(typeof nullVariable);
// console.log(myDecision);
// console.log(typeof myDecision);

// // alert gargana 
// // x^2+y^2-z^3 / 240*175

// let x = 10;
// let y = 7;
// let z = 4;
// let number = 240;
// let number1 = 175;
// alert(x*x+y*y-z*z*z/number*number1 )
// console.log(y%4)

// let result = '30' - 10;
// console.log(result);


// // toirgiin urt oldog tomyo : 2PR
// // A=(a+b)/2*h



// const p = 3.14;
// let r = 4;

// alert(2*p*r)
// let A = 5;
// let B = 6;
// let h = 4;
// alert((A+B)/2*h)


// let bottom = prompt("Please give me your bottom!")
// let test = prompt("Please give me your top!")
// let height = prompt("Please give me your height!")
// let trapezoArea=(bottom + test)/2*height;
// alert(trapezoArea);

// let a = 5;
// let b = 6;

// let a = prompt("please here number")
// let b = prompt("please here number")
// if(a <= b){
//     console.log("its true");
// }else{
//     console.log("its false");
// }


// let yearOfBirth = prompt("write here")
// let old = 2022 - yearOfBirth
// if(0<= old && old <= 1){
//     console.log("Infant")
// }else if (1 < old && old <= 3) {
//     console.log("Toddler")
// }else if (3 < old && old <= 5){
//     console.log("Gradeschooler")
// }else if (5 < old && old <= 12){
//     console.log("Teen")
// }else if (12 < old && old <= 21){
//     console.log("Young adult")
// }else if (21 < old){
//     console.log("Adult")
// }


// let number = prompt ("give me number")
// if(number%2==1){
//     alert("sondgoi")
// }
// else(
//     alert("tegsh")
// )


// let number = prompt ("give me number")
// if(number%3==0 || number%7==0){
//     alert("bolno")
// }else{
//     alert("bolohgui")
// }

// let height = prompt ("give me height")
// let weight = prompt ("give me weight")

// if ((weight/(height*height)) <= 18 ){
//     alert("Underweight")
// }else if ((weight/(height*height)) <=18.5 ) {
//     alert("thin for height")
// }
// else if (18.6 && (weight/(height*height)) <= 24.9 ) {
//     alert("thin for height")
// }
// else if (weight/(height*height) <18.5 ) {
//     alert("thin for height")
// }
// else if (weight/(height*height) <18.5 ) {
//     alert("thin for height")
// }


let day = prompt ("here");
console.log(typeof(day));

let dayNumber = Number(day);
console.log(typeof(dayNumber));

let dayName;

switch(dayNumber){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Suterday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);
alert(dayName);