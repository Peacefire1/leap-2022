//ex01 - js method

const shoppingCart = ["milk","coffee","tea","honey"]

if(!shoppingCart.includes("meat")){
    shoppingCart.unshift("meat")
}
console.log(shoppingCart);

if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar")
}
console.log(shoppingCart)

if(shoppingCart.includes("honey")){
    let index = shoppingCart.indexOf("honey")
    shoppingCart.splice(index,1)
}
console.log(shoppingCart)

if(shoppingCart.includes("tea")){
    let index = shoppingCart.indexOf("tea")
    shoppingCart.splice(index,1,"Green Tea")
}
console.log(shoppingCart);




// ex02 JS Methods

let array = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon",]
console.log(array);
console.log("Sort")
console.log(array.sort());
console.log("reverse")
console.log(array.reverse());
console.log("Remove first it company")
array.shift();
console.log(array);
console.log("Remove the middle company")
if(array.length % 2 == 0){
    let tempArray = array.splice(array.length/2 -1,2);
    console.log(array);
}else{
    let tempArray = array.splice(array.length/2,1);
    console.log(array)
}
console.log("Remove the last IT company from the array")
array.pop()
console.log(array)