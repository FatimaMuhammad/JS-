 /*console.log(2>1);
 console.log(2>=1);
 console.log(2==1);
 console.log(2!==1);*/

 // different data types always occuring problem
console.log("2" > 1); //true
console.log("02" > 1); // true

//typescript doesn not allow to comapre two different data types.
console.log("null");

console.log(null > 0); //f
console.log( null == 0); // f
console.log(null >= 0); //t
console.log(null <= 0); //t


// undefined
console.log("undefined");

console.log(undefined == 0 );
console.log( undefined > 0);
console.log(undefined <= 0);
console.log(undefined > 0);

// conversion like this can create a confusion so avoid it as much as possbile
// null and undefines comparison does not give a clean code.


//equality check is something else than comparison operator

// strict check 
// triplecheck 
// values check with data types 

console.log("2" === 2 );
// no conversion or check just check data types based on taht it will provide result 



 
 
