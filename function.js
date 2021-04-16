//In js, we have 2 types of functions: declarative and statement

//A declarative function is for example
sayHi("Oscar")
function sayHi(name){
    console.log(`Hi ${name}`)
}
//When we use declarative functions, hoisting can be applied to that function



//In the other hand, we have statement function for example:
const sayHello = name => console.log(`Hello ${name}`);
sayHello("Oscar")
//with this declaration, hoisting can't be applied.
