//Values that are false or true by default

//Examples that return false
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Examples that return true:
Boolean(1); //True to every value different of 0
Boolean("a"); //true != ""
Boolean([]); //true even tho the array is empty
Boolean({}); //true even tho the object is empty
Boolean(function(){}); //Every function is true