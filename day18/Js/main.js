// console.log("Array methods");

// // shift

// // arr1 = [1, 2, 3] => // shif(arr1) => [2,3]

// let shiftArr = (arr) => {
//     let tempArray = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         if(i != 0){
//             tempArray.push(arr[i])
//         }
//     }

//     return tempArray;

// }

// let arr1 = [1, 2, 3, 5, 6];

// console.log(shiftArr(arr1)); //[2, 3, 5, 6]
// console.log("array shift method");
// console.log(arr1) // [2, 3]
// console.log (firstElement);


// console.log("unshift array algorithm");


// let unshiftArray = function (arr3, number){
//     let tempArray= [];
//     tempArray.push(number);
    
//     for(let i = 0 ; i < arr3.length ; i++){
//         tempArray.push(arr3[i]);
//     }

//     return tempArray;
// }


// let arr2 = [5, 6, 7];
// console.log(unshiftArray(arr3, 1)); //[1, 5, 6,  7];


let sortArray = [1, 2, 8, 7, -1, 10];
let max = -99999;
console.log(sortArray);
let temp = sortArray[0];



function sortingAlgorithm(arr){
    
    for(let i = 0 ; i < arr.length - 2 ; i++){
        let indexMin= i ;
        for(let j = i+1 ; j < arr.length-1; j++){
            if(arr[j]<arr[indexMin]){
                indexMin = j ;
            }
        }
        temp = arr[i]
        arr[i]=arr[indexMin];
        arr[indexMin] = temp;

    }
    return arr;


}


console.log(sortingAlgorithm(sortArray)) // [1, 1, 2, 7, 8, 10]

console.log("array sorting");
const names = ["marlaa", "javkhaa", "javkhlan", "dorj"];
names.sort();
console.log(names);

console.log("array reverse");
function arrayReverse(arr){
    let tempArray = [];
    for(let i = arr.length; i >= 0 ; i--){
        tempArray.push(arr[i]);
    }
    return tempArray;
}
let arrReverse = [4,5,1,8];

console.log(arrayReverse(arrReverse)); // reverse




//slice

const nameSlice = ["Bat", "dorj","purev","davaa","tomor"];
console.log(nameSlice.slice(2));
console.log(nameSlice);

function nameSliceFunc (arr, index){
    // let tempArray = [];
    // for(i = index ; i<arr.length; i++ ){
    //     tempArray.push(arr[i])
    // }
    // return tempArray;
    for(let i =0 ; i<index ; i++){
        arr.shift()
    }
    return arr;
}

console.log(nameSliceFunc([1,2,3,4,5],2)) //[3 , 4, 5]

//              Splice


console.log("splice method")
const spliceNames = ["davaa","lkhagva","purev","bymba"];
spliceNames.splice(1, 0, "mygmar");
//1deh indeks deer shineer utga nemeh uildel
console.log(spliceNames);
spliceNames.splice(4,0, "baasan")
console.log(spliceNames);