console.log("Object exercises");
let animals = [
    {
        type:"dog",
        sound:"woof",
    },
    {
        type:"cow",
        sound:"moo",
    },
    {
        type:"cat",
        sound:"meow",
    }
]

function howDoesTheFoxSay(array,animalsType){

    for(let i = 0; i < array.length; i++){
        if(array[i].type == animalsType){
            console.log(`${array[i].sound} - ${array[i].sound} - ${array[i].sound}`)
        }
        //  console.log(array[i].type);

    }



}
console.log("dog barking");
howDoesTheFoxSay(animals, "dog");//Woof-Woof-Woof
console.log("cow mooing");
howDoesTheFoxSay(animals, "cow");//Moo-Moo-Moo
console.log("cat meowing")
howDoesTheFoxSay(animals, "cat");//Meow-Meow-Meow




let students= [
    {
        name :"Khangai",
        birthOfYear:"1982",
        hobby: "karate",
        single:false,
    },
    {
        name :"Baldan",
        birthOfYear:"2004",
        hobby: "Basketball",
        single:true,
    },
    {
        name :"Dulguun",
        birthOfYear:"1992",
        hobby: "Ski",
        single:false,
    },
]

function findOlderStudents(array){
    for( i = 0; i < array.length ; i++){
        if((2022 - Number(array[i].birthOfYear)) >= 20){

            let age = 2022 - Number(array[i].birthOfYear);
            console.log(age);
        }else{
            console.log("child");
        }
    }
}

findOlderStudents(students);
