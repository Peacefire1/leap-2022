console.log("lesson objects");


let rabbit1 = {
    color: "white",
    rName: "Chandaga",
    gender: "male",
    age: 2,
    sayMyName: function (myName) {
        console.log(`your name is ${myName}`)
    }
}

console.log(rabbit1);
console.log(rabbit1.color);
rabbit1.color = "shavhai"
console.log(rabbit1);
console.log(rabbit1.color)
rabbit1.sayMyName("tsogtoo")

let rabbit2 = {
    color: "black",
    rName: "Dorj",
    age:5,
    ear: "long",
    jump: function(){
        console.log("i can jump")
    }
}

console.log("here is rabbit 2 speaks")

console.log(rabbit2);
let rabbits = [rabbit1,rabbit2];

console.log(rabbits);
rabbit2.jump()