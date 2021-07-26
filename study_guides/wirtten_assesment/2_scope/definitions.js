// Defining variable scope, especially how variables interact with function definitions and blocks

// Q: What is variable scope?
/* My definition:

   - Variable scope is the lexical environment where it can be accessed throughout the program.
   - Variable scope is the location in which it can be accessed by other variables or functions in a program. 
   - There are three main types of scopes: 
     1. Global Scope
     2. Local Scope
     3. Function Scope
   
     Q: What is global scope?
     A: Global scope is the outer most lexical environment that contains variables and functions that can be accessed by any nested scope.
     
     Q: What is local scope?
     A: Local scope is the scope within a block. All variables declared within a block using const or let can not be accessed outside of that scope. Variables however declared with the var key word can be accessed from within a nested scope.


*/

// Q: How does variable scope interact with function definitions?

// Q: How does variable scope interact with blocks?

// Global Scope AKA Global Lexical Environment
let globalVaribale = "test";

const GLOBAL_CONSTANT = 100;

{
  //   console.log(globalVaribale);
}

// var key word and local scope

{
  var varVariable = "vars are accessible globally";

  let letVariable = "Not accessible";

  const constVariable = "Not accessible";
}

// console.log(varVariable);
// console.log(letVariable); // => Reference Error
// console.log(constVariable); // => Reference Error

// Q: Why are variables defined with the var key word accessible on the global scope?
// A: For one var is function scoped meaning that it is only accessible within the lexicon environment of the block of the function.

function test() {
  var name = "Isaac";
  return name;
}

// console.log(name); // => Reference Error
