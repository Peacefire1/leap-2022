// Given number of arrays = 1, 2, 5, 3, 5, 6, 7, 8
// Let's find out which numbers are even
// if the number is even , then print out the number 
// you have to use FOR loop

let numbers = [
    1 , 2 ,5, 3 , 5 , 6 , 7 , 8 
]

for (let i = 0; i < numbers.length ; i++){
    // console.log(i);
    if(numbers[i] % 2 == 1){
        
        console.log(numbers[i]);
    }
}

numbers [3] = 6;
console.log(numbers);


let playerNames = ["salah" , "mane" , "becker" , "diaz"];
console.log(playerNames);

playerNames[1] = "Tsogtoo"


console.log(playerNames);

let Too = [1 , 2, 5 , 3, 5, 6 ,7 , 8];

 for(let a=0; a < Too.length ; a++){
    Too[a] = Too[a]+1 
 }

console.log(Too);


let b = [ "t", "aa" ,"aaa", 1231 , 213, "ssss"]

console.log(b);




