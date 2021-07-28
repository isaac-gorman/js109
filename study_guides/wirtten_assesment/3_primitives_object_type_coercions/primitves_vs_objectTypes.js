// By Value vs. By reference:

// Q: What is an object in JS?
// A: Technically almost everything in JS is an object, this includes arrays, and functions. An object is a collection of name/value pairs. which values can be anything, meaning that it can be either primitives or non-primitive data types such as other object types. Object have properties and methods (functions that sit on an object) and are sitting in memory (heap) with reference to the spots where these properties/methods "live". You have access to those properties and methods in memory.

// Q: All primitive types interact by what?
// A: All primitive interact by value (initial pointer to their address in memory which directly points to its value in the call stack)

let a = 4;
let b = a;
a = 20;

// a => points to address that stores value "4"
// b => points to same address as variable a's which stores value "4"
// a => points to new address that stores value "20". Variable b's value its associated with remains unchanged.

// Q: What is technically occurring the code above?
// A: First I am declaring and initializing variable a to the value of 4 (variable is initialized to an address in which it will point to that stores to that value in the call stack). Then I am declaring an initializing variable.

// Q: All non-primitive value type interact in which way?
// A: All non-primitive values interact via reference address to the heap from the stack. When initializing a new variable to the other.

const c = [1];
const d = c;

c.push(2);
c; // => [1, 2]
d; // => [1, 2]

// Memory Model
/*
-------------------------------------------------------------------------------   
Identifier(s) |     Call Stack        |                     Heap               |
-------------------------------------------------------------------------------   
    c,d       |   Address   |    Value    |   Address    |   Value (Object)    |   
-------------------------------------------------------------------------------   
              | 002343HSC90 | 0HAHSK90J12 | 0HAHSK90J12  |   [ 1 ]             |
-------------------------------------------------------------------------------   
              |
-------------------------------------------------------------------------------         
*/

// Q: What is occurring in memory when we initialize a variable to a non-primitive type?

// Q: What is happening under the hood?
