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

let c = [1];
const d = c;

c.push(2);
c; // => [1, 2]
d; // => [1, 2]

// Memory Model
/*

Initialization 
------------------------------------------------------------------------------------   
|                   Call Stack                |             Heap                    |
------------------------------------------------------------------------------------   
|  Identifier(s)   |   Address   |    Value    |   Address    |   Value (Object)    |   
------------------------------------------------------------------------------------   
|    c, d          | 002343HSC90 | 0HAHSK90J12 | 0HAHSK90J12  |   [ 1 ]             |
------------------------------------------------------------------------------------   
|                  |           
------------------------------------------------------------------------------------         


Mutation
------------------------------------------------------------------------------------   
|                   Call Stack                |             Heap                    |
------------------------------------------------------------------------------------   
|  Identifier(s)   |   Address   |    Value    |   Address    |   Value (Object)    |   
------------------------------------------------------------------------------------   
|    c, d          | 002343HSC90 | 0HAHSK90J12 | 0HAHSK90J12  |   [ 1, 2 ]          |
------------------------------------------------------------------------------------   
|                  |           
------------------------------------------------------------------------------------         
*/

// Q: What is occurring in memory when we initialize a variable to a non-primitive type?
// A: Whenever you initialize a variable to a non-primitive their identifier will actually point to the same address in the call stack which will contain a heap address as a value which points to the address of the object in the heap. Whenever I mutate variable c's array am also mutating d's array too because they c and d both point to the same address in memory.

// Q: What happens if I reassign the c variable to a completely different array as such:
c = ["bread", "butter"];
/* Memory Model: 

Initialization 
------------------------------------------------------------------------------------   
|                   Call Stack                |             Heap                    |
------------------------------------------------------------------------------------   
|  Identifier(s)   |   Address   |    Value    |   Address    |   Value (Object)    |   
------------------------------------------------------------------------------------   
|    c, d          | 002343HSC90 | 0HAHSK90J12 | 0HAHSK90J12  |    [ 1, 2 ]         |
------------------------------------------------------------------------------------   
|                  |           
------------------------------------------------------------------------------------         

Re-Assignment
------------------------------------------------------------------------------------   
|                   Call Stack                 |             Heap                     |
------------------------------------------------------------------------------------   
|  Identifier(s)   |   Address   |    Value    |   Address    |   Value (Object)      |   
------------------------------------------------------------------------------------   
|       d          | 002343HSC90 | 0HAHSK90J12 | 0HAHSK90J12  |   [ 1, 2 ]            |
------------------------------------------------------------------------------------   
|       c          | 012893DWENI | 0002CHJJJLK | 0002CHJJJLK  | [ "bread", "butter" ] |
------------------------------------------------------------------------------------         
*/

// Written Explanation:
// - As we re-assign the c variable c now will point to a brand new address on the call stack which will store a value of another address that points to the actual array in the heap. Thus leaving the d variable completely unaffected by the re-assignment d will still reference its array in memory.
