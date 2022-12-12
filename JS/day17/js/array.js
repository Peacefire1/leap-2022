//arr 1 = [1 , 2 ,3] arr2 = [ 4 , 5 , 6 ] => [1,2,3,4,5,6]

function arrConcat(arr1 , arr2){
    let concatedArray = [];
    //arr.push()
    for(let i = 0; i < arr2.length ; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}


let arrayC1 = [1, 2, 3]
let arrayC2 = [4 , 5, 6];
console.log (arrConcat(arrayC1, arrayC2));

// arr1 + arr2

function arrayElementAdd(arr1,arr2){
    let sum= []
    for(let i = 0; i <arr1.length; i++){
        sum[i] = arr1[i] + arr2[i]
    }
    return sum;
}

console.log(arrayElementAdd(arrayC1,arrayC2))

//arr1=[2,4,5] => 5-> true , 2=> true , 3=> flase

let arrIncludes = function(arr,number){
    let found = false;
    for(let i =0 ; i<arr.length; i++){
        if(number === arr[i]){
            found = true;
            break;
        }
    }
    return found;
}
const arrayInc =[2,4,5];
console.log(arrIncludes(arrayInc,2))
console.log(arrIncludes(arrayInc,5))
console.log(arrIncludes(arrayInc,3))


//array implicit function includes

console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));



// arr1 = [1,2,3] => 3index ? => 2

let findIndex = function(arr,number){
    let index = -1;
    for(let i = 0 ; i < arr.length ; i++){
        if(number == arr[i]){
            index = i;
        }
    }
    return index;
}
const arrIndex = [1,2,3];
console.log(findIndex(arrIndex,3))
console.log(findIndex(arrIndex,2))
console.log(findIndex(arrIndex,10))

const animals =["chono " , "buhen","temee","nugas","buhun"];




//    join

console.log("Join me function");

// arr1=[1,2,3] => 123

let funcJoin = (arr, symbol) => {
    let output="";

    for(let i = 0 ; i < arr.length; i++){
        if(i == arr.length-1){
            
            symbol = ""
        };
        output = output + arr[i] + symbol;
    }

    return output;
}
const arrayJoin = [1,2,3]
console.log(funcJoin(arrayJoin, "+"))

console.log("array join method")

//arr1 = [1, 2 ,3] = > pop => [1,2]


let popFunction = (arr) => {
    const lastIndex = arr.length-1;
    let poppedArray =[]

    for(let i= 0 ; i < arr.length ; i++){
        if(i != lastIndex){
            poppedArray.push(arr[i])
        }
    }

    return poppedArray
}
const popArray=[1,2,3]
console.log(popFunction(popArray))
console.log(popFunction([12,4,3,5,6]))

console.log("pop array method")

const popArrayReslut = [3,4,5,6,7];
popArrayReslut.pop();
console.log(popArrayReslut);