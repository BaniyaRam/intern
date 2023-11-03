let myArray =Array(0);
myArray.push(2)
myArray.push(24)
myArray.push(33)
console.log(myArray)
console.log("\n\n\n\n")
// print an specific elements of an array
console.log(myArray[2])
console.log("\n\n\n\n")
// reverse an array components
myArray.reverse()
console.log(myArray)
// shifting or removing the first element of an array
myArray.shift()
console.log(myArray)

myArray.includes()
console.log(myArray)
console.log("\n\n\n\n\n")

// function with sum ,difference, product and division using two numbers
let x=2;
let y=3;
let sum =plus(x,y);
let diff=minus(x,y);
let product=multiply(x,y);
let division=divide(x,y);

function plus(a,b){
    return a+b;
}
console.log((sum))
console.log("\n\n\n")

function minus(a,b){
    return a-b;
}
console.log(diff)
console.log("\n\n")
function multiply(a,b){
    return a*b;
}
console.log(product)
console.log("\n\n")
function divide(a,b){
    return a/b;

}
console.log(division)

