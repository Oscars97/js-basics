/* Today we are going to talk about the SCOPE, when we declare a variable 
here, it is going to be in the global scope. For example:
*/
var name = "Oscar";

// In the other hand we have the local scope, it is when we declare a variable inside of a piece of code. The local 
// scope could be a function, a loop or a if/else statement.

const sayHi = () =>{
    //Here, I can use the variables that has the global scope
    let lastName = "Sanchez";
    console.log(`Hello ${name} ${lastName}`)
}
console.log(name);
console.log(lastName); //here we will have an error because we are calling a variable that has the local scope.
sayHi();
