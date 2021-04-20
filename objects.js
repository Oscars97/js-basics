//Now we are going to talk about objects but, what is an object?
//An object is a representation of an object from real life.
//You can add attributes and methods to give real characteristics
//to this object 

//If we want to create an object you have to code:
const myCar = { //this kind of object are build with key:value pairs
    brand: "Toyota",
    year: 2021, //these are attributes of this object
    model: "Corolla",
    getInfo: function(){
        return `The brand is ${this.brand}, 
        the year is ${this.year} and 
        the model is ${this.model}` 
    },

}

//now we want to bring specif data from this object:
//for example, to get the year is:
let year = myCar["year"];
console.log(year);

//to add a property to this object we can doing with:
myCar["color"] = "red";
console.log(myCar);

console.log(myCar.getInfo());
