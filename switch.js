//In this lesson, we are going to talk about the switch
//This is the way that we can evalute several cases without coding 3000 lines of code writing if else if else if else if else
let answer = 2;
switch (answer) { //We are going to evaluate the key that is inside the parenthesis.
    case 1:
        console.log("Number one");
        break; //
    case 2:
        console.log("Number two");
        break;
    case 3:
        console.log("Number three");
        break;
    case 4:
        console.log("Number four");
        break;
    default: //The default will be executed if the asnwer doesn't match any case.
        console.log("Invalid answer"); 
        break;
}