//Find, ForEach and Some methods
const items = [
    {"name": "Bicycle", 
     "price": 3000},
     {"name": "Car", 
     "price": 40000},
     {"name": "pc", 
     "price": 500},
     {"name": "Eraser", 
     "price": 20},
     {"name": "beer", 
     "price": 100},
     {"name": "tv", 
     "price": 900},
     {"name": "chair", 
     "price": 500},
];
//find methods works the way that we can look for an specif
//element in the array
const testingFind = items.find((item)=>item.name==="tv");
console.log(testingFind);

//For each is exactly the same than for/for of

//SOME
//Returns true or false
const someMethod = items.some((item)=>item.price>=100);
console.log(someMethod);
