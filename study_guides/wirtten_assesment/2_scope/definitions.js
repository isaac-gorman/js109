// Defining variable scope, especially how variables interact with function definitions and blocks


// Review (/Users/isaacgorman/Desktop/LaunchSchool/js109/study_guides/fireshipJS_course/chapter2_JS_Dev/lexicalEnvironment.js)
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
/* My definition:

   A: Well there are two types of variables scopes when declaring variables. Or other wise known as lexical environment.
  
   1. Function Scope

   2. Block Scope

   Function scope is created whenever a variable is declared with the var keyword. Whenever a js file is executed by the runtime environment the interpreter looks for variable keywords in order to interpret its scope. Whenever a variable declared with a var key word is identified by the interpreter upon the creation phase of the global execution context the variable gets hoisted to the top of whatever function scope it is within. This enables the variable to be accessed throughout the program. However hoisting is limited to only block scopes within the actual function and not nested functions. For example variables declared within a nested function in another function are not accessible by the outer function, and no hoisting occurs. *Remember this occurs on the most outer scope "global scope" because the entire file is interpreted as on giant function called the global execution context that gets pushed first to the top of the call stack, known as global() or main()

   Block scope on the other hand does not involve the interpreter automatically hoisting variables to the top of the function. However variables defined outside of a functions or any block scope can always created a conduit to outer variables (they are accessible).


*/


// Q: What is a lexical environment?
/* My definition:
   
   The lexical environment is an abstract concept that is used to model the structure in which certain variables are accessible to one another. A lexical environment is created each time you create a new block or function.
*/

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
// A: For one var is function scoped meaning that it is only accessible within the lexicon environment of the block of the function. But when a variable is declared outside of any function it. Its hoisted to the top of the file and is not initialized.

let firstName = "Isaac";

function test() 

  function nestedTest() {
    console.log("nested---", firstName);
  }

  {
    var firstName = "Jasmine";
  }
  nestedTest();
}

test();
// console.log(name); // => Reference Error
