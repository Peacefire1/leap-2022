let F1 = 0 ;
let F2 = 1 ;
let n = 0 ;

let m = Number(prompt("give me your range"));
while(n <= m){
    F3 = F1 + F2 ;
    F1 = F2;
    F2 = F3;
    n = n + 1 ;
}
alert(F3);
console.log(F3);