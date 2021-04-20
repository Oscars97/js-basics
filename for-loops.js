//Today we are going to talk about loops but, what is a loop?
//A loop is the way that we can iterate throught our array.
//first: nwe need to create our array
let students = ["Oscar","Steven","Carlos","Maria"];

//after we can create a function that is going to receive 
//a student and its going to return hello and the name 
//of the student.
const greeting = student => console.log(`Hello ${student}`);

//here we iterate the array and for each student of the array
//we call our function to say hello
for (let i = 0; i < students.length; i++) {
    greeting(students[i]);   
}

//also we can try a different for loop called for of
for(let student of students){
    greeting(student)
};
