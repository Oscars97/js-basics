//HOISTING, that is we can call a variable or a function before we declare it without having any error.

console.log(name); //it is going to print "undefined" but we are not receiving an error.
var name = "Oscar";

console.log(lastName); //With ecmascript 6 the app won't work.
let lastName = "Sanchez";


//But hoisting also works with descriptive functions, for example:
sayHi();
function sayHi() {
    console.log("Hi, hoisting works")
};

sayHello(); //We are receiving an error because hoisting doesn't work with statement functions
const sayHello = ()=> console.log("Hello");