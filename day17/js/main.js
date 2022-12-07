function pow(number , exponent){
    let multiply = 1;
    for(let i = 1; i <= exponent; i++){
        multiply = multiply * number;
    }

    return multiply;
}

let result = pow (2, 3);

console.log(result);






//1. 

function findMin(x,y){
    if( x > y){
        console.log("true")
    }else{
        console.log("false")
    }
}
findMin(2,4);
findMin(3,1);


//2.

function printArray (array){
    for(let i = 0 ; i < array.length; i++){

        console.log(array[i]);

    }
}

let myArray = [1,2,3,5,6,100]
printArray(myArray);

//3.

let findArrayMax = function (arr){
    let max= -1 ;
    for (let i = 0 ;  i < arr.length ; i++  ){
        if(max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
    
}
console.log(findArrayMax(myArray));

//4.

let findArrayAverage = (arr) => {
    let sum = 0;
    for(let i =0 ; i < arr.length ; i++ ) {
        sum = sum + arr[i]; 
    }
    const average = sum / arr.length;
    return average;
}

console.log(findArrayAverage(myArray));


