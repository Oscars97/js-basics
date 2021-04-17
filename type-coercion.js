//Type Coercion: We have to types of coercion, explicit and implicit

//Implicit: When the language changes the type by itself to a type that we need. For example:
let sum = 2 + "4"; //we get 24
let multiply = 2 * "4"; //we get 8
console.log(sum)
console.log(multiply)


//Explicit: When we force a variable to become another data type
var a = 20;
a = String(a); // with this we can change that variable that was a number and now is a string
var b = "20";
b = Number(b); //with this we can change that variable that was a string and now is a number
let c = "123abc";
c = parseInt(c) //with this we can change that variable that was a string and now is a number
console.log(typeof a+" "+a);
console.log(typeof b+" "+b);
console.log(typeof c+" "+c);
