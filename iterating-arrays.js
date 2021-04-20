//Let's talk about iterating with filter and map
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
//We use filter when we want to get elements with special
//characteristics, in this case we are catching the 
//items that have the price greater than 500
const itemsFiltered = items.filter((item)=>item.price>500);
console.log("Filtered items:");
console.log(itemsFiltered);


//now we are going to work with map:
//This method helps me to iterate throught the array
//and do something with each element.
//In this case I only want the name of the element
//so I can get with map method
const mappedElements = items.map((item)=>item.name);
console.log("Names:");
console.log(mappedElements);

