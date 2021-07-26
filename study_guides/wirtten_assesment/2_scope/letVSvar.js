// 1. Re-declaration:
// function withVar() {
//   var x = 1;
//   var x = 5;
//   // second x variable shadows the first x variable. Now first x is going to behave like it never existed.
//   // Q: Why is shadowing bad?
//   // A: Shadowing can make it difficult to solve bugs in the program
// }

// function withLet() {
//   var x = 1;
//   let x = 5;

//   // Using let on the other hand will not allow you to shadow variables thus producing a syntax error on the terminal.
// }

// withVar();
// withLet();

// 2. Block Scope:

// 2. Scope

// function withVar() {
//   var i = 8;

//   for (var i = 0; i < 1; i++) {
//     var x = 17;
//   }

//   //   console.log(`x = ${x}`); // x = 17
//   console.log(`i = ${i}`);
// }

// function withLet() {
//   let i = 8;
//   for (let i = 0; i < 1; i++) {
//     //   the above i variable is actually local to the for loop scope
//     //  but i is still shadowing the i from its outer scope but it does not give a syntax error
//     let x = 17;
//   }

//   //   console.log(`x = ${x}`);
//   console.log(`i = ${i}`);
// }

// withVar(); // => x = 17
// withLet(); // => Reference Error x is not defined.

// 3. Hoisting

function withVar() {
  var numberOfCars;
  if (!numberOfCars) {
    console.log("the variable is undefined, and was hoisted");
  }

  numberOfCars = 5;
}

function withLet() {
  if (!numberOfCars) {
    console.log("nope");
  }

  let numberOfCars = 5;
}

// withLet(); // ReferenceError cannot access numberOfCars before initialization
// withVar();
// Q: What are three important difference between let and var? And why should I use let?
/* Answer:

   1. Re-declaration. let does not allow you to shadow when variables are declared within the same scope. And let will error even when shadowing is occurring with other key word declarations using var and const even if its the first declaration and beyond. Any variable declared with let will prevent an other variable from using the same identifer in a declaration. Great feature from let.

   2. Scope. 
      Q: What is the difference in scoping from var and let?
      A: var is function scoped and let is blocked scoped.
         var is function scoped. What does function scoped mean? For example the withVar function within the if block x is declared with a var keyword which means at runtime the interpreter will hoist the x variable declaration to the top of the function and declare it so that x is accessible everywhere in the function scope. Think of the var keyword as having conduits that connect it anywhere in the function even nested scopes, but this does not include nested functions. 

         On the other hand what is block scope. Block scope is limiting the accessibility of a variable to the blocks that it is defined in. So unlike var there is no hoisting that occurs that makes the variable accessible. Although variables defined with let and const in outer scopes (lexical environments) are accessible by nested scopes even functions.

    3. Variable Hoisting
        
    

*/
