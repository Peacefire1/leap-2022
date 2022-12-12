// let count = 0, a = prompt("12") , sum = 0 ;
// while(count < a.length){
//     sum = sum + Number(a.charAt(count));
//     console.log(a.charAt(count));
//     count = count + 1;
// }
// console.log(sum);


// let rem = 0 , Sum = 0;
// let N = Number(prompt("give me number"));
// while(N > 0){
//     rem = N % 10;
//     Sum = Sum + rem ; 
//     N = Math.floor(N / 10);
// }

// console.log(Sum);

for( rem = 0, N=Number(prompt("give me number")) , Sum = 0; N>0 ; N = Math.floor(N / 10)){
    rem = N % 10;
    Sum = Sum + rem ; 
}
console.log(Sum);