//IF - ELSE - ElSE IF

//First, we are going to talk about the conditional "if"

/*
    With the word "if" we can check wheter a condicion is true or no, for example:
*/
let answer = 21;
if(true){ //IF THIS IS TRUE
    console.log("True"); //EXECUTE THIS PIECE OF CODE
}

//But also we can use the if-else to check if it is true or false
//for example:

if(answer%2===0){ //if this is true, 
    console.log("Even") //this piece of code is going to be executed
}else{ //But if the result if false
    console.log("Odd"); // this piece of code is going to be executed
}

//Finally, we have the ELSE IF:
if(answer<0){ 
    console.log("The answer must be greater than 0");
}else if(answer>0 && answer <=20){ //With the if else we can check another condition
    console.log("The answer is between 0 and 20");
}else{
    console.log("The answer is greater than 20");
}


