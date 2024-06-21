//   Primitive 
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt.

const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null 
let userEmail;

const id = Symbol('123') 
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3124437829859238729n

//   Reference (Non primitive)
// Array, Object, Functions.

const heros = ["shaktiman","maagraj","doga"]
let myObj= {
    name: "aditya",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof outsideTemp)