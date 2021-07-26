// Q: What are primitive values?
/* Answer:
   My definition: 
    Primitive values are the most basic values of JavaScript. They are sometimes refereed to as the atoms of JavaScript or basic building blocks of JS.

   Characteristics & Behaviors: 
    Primitive values similar to atoms can't be created or destroyed ... well sorta. Primitive values are un-mutable meaning that they can not be altered only replaced by other values primitives or objects types. 
*/

// Q: List out all the primitive values? And define each one.
/* Answer:
 
   - Strings
   - Booleans
   - Numbers
   - BigInt
   - null 
   - undefined
   - Symbol

   Q: What is the symbol data type?
   A: A symbol is a unique and immutable (it cannot change) value. You can use a symbol in many different ways, but most of the time you'll use them at places where otherwise you would use a string or a number. Strings and numbers aren't unique themselves, so if you ever want a unique global value, symbols are the way to go. This will make a lot more sense once I get to functions and objects.

   Q: What is the BigInt data type?
   A: BigInt is used to store and calculate numbers beyond the integer limit of the Number data type. BigInt is used for arbitrary precision calculations. Its applications is mostly for scientific and engineering calculations. BigInt is created by appending the "n" key letter at the end of a integer or calling the constructor.

   Q: What is a Boolean?
   A: Booleans are either true or false. The boolean data type got it's name form the English mathematician who invented Boolean algebra George Boole. Booleans represent logical entities. They are often implemented in if statements or loops, and to handle the flow of execution of a program (control flow). Essentially booleans are used to decide whether certain blocks of code or other task should get executed based on whether a variable is true or false. *Remember that boolean values are often associated with helping a computer make simple comparisons to help them make decisions. Booleans are used to test conditions that selection and iteration are based around.

   Q: What is a number?
   A: Number is actually a floating point number, AKA decimal numbers. In JS there always decimals even when you don't see them. In JS 0.2 + 0.1 = 0.30000000000000004. Yea JS is wired like that. The arithmetic is not always a 100% accurate as you would expect. But there are ways to assure that the number being returned always has the the right amount of decimals such as the Number.prototyped.toFixed() method and the Number.prototyped.toPrecision()

   Q: What is a string?
   A: The string represents a sequence of characters. In JS we can use either a single quote or double quote in order to indicate that the value is a string.

   Q: What is null?
   A: null is used to be assigned to variables that intentionally have no value. null however does not mean 0 or undefined the any variable that is initialized as null will deliberately point to nothing. Remember null is nothing, and undefined means empty. In JS nothing is a black box of nothing yet its a black box in storage. undefined is an empty storage container nothing has been stored in the variable (storage container).

   Q: What is undefined?
   A: undefined is empty. undefined is a variable that has not been initialized, aka it has not been defined, variables that contain the value undefined have yet to be defined. No value has been given yet.




 
*/

// Q: How is JavaScript a dynamically type language?
/* Answer:
    
   JavaScript is dynamically typed and not statically typed like other languages (Java, C) because value types within variables not need to be defined before run-time. This enables the ability to: 
    1. Run our scripts immediately
    2. It allows our program the ability to alter values during runtime (type coercion)
    3. Enables for more polymorphism.

*/

// Q: How can I check the type of a value in JS?
/* Answer:

    You can check any type by using the typeof operator.

    let firstName = "Kurt"
    let lastName = "Cobain"

    console.log(typeof lastName) => "string"
 
*/

// Q: What are truthy and falsy values?
/* Answer:

   Whenever a noon boolean value is used in the context of a boolean JavaScript uses type coercion to coerce the value to either true or false.

   What truthy and falsy values are not: they are not booleans so they are not true or false.
   Truthy or falsy values are values that evaluate to either truthy or falsy values that can be used in place of truth or false boolean types to help the program make decisions or test conditions.

   AKA truthy and falsy values are values that are considered either true or false encountered in a boolean context.
 
*/

// Q: What are falsy values?
/* Answer:

   Falsy values are anything that gets evaluated as false in a condition 

   Falsy values are: 
   0n
   ""
   0
   undefined
   null
   NaN
   -0

 
*/

// Q: What are truthy values?
/* Answer:
 
    {}
    "..."
    []
    1


*/

// Q: How can I check if a value is truthy or not?
/* Answer:
 
   double bang !!

   !! double NOT operator (coerces a value to opposite, opposite boolean value)
*/

let number = !!0;

// console.log(number); // => false
