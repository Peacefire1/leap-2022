
// // function declaration 

// function f (){
//     console.log("Hello Functions");
// }


// // function call 

// f();


// /*
// * f(x) = x * x => x is parameter  buyu funktsiin gadnaas avdag huvisagch
//  */

// function f1 (x){
//     console.log( x * x );
// }
// f1(5);

// 1.

function f (x , y){
    console.log (Math.pow(x, 2) + Math.pow(y, 2))
}
f(2 , 3);

// 2.

function f1 (x , y){
    console.log(Math.pow((x+y), 2))
}
f1 ( 2 , 3 );

// 3.

function f2 (m){
    const c = 300;
    console.log( m * Math.pow(c ,2));
}
f2(2);

// 4. 

function f3 (x){
    let multiplication = 1;
    for (let i=1 ; i <= x ; i++){
        multiplication = multiplication * i ;
    }
    console.log(multiplication);
}

f3 (3);

//  5. 

function f4 (x , y){
    console.log(Math.cos(x) - Math.sin(y));
}

f4(0.5 , 1);


// 6.


function f5 (x){
    console.log(Math.pow(x, 3) + Math.pow(x, 2) + (5 * x) + 12);
}

f5 (1);

// 7.

function f6(x){
    console.log(x*x);
}
f6(4);

// 8. 

// function Fib (x){
//     Fib(0)= 0;
//     Fib (1) = 1;
//     console.log(Fib(x-1) + Fib(x-2));
// }
// Fib(1);


// 9.

function f7 (x){
    console.log(Math.sqrt(x));
}
f7(9);