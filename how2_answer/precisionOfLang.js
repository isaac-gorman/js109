// Precision of Language
/*
    Q: When answering the test questions or even studying code, what should I aim for?

    Aim to understand what is occurring line by line. Then explain the what and the why of what is occurring line by line and be as explicit as possible. And conclude with what principle the program demonstrates. 
*/

// Practice Precise Language:
let hello = "Hello, world!";

function myFunc() {
  console.log(hello);
}

myFunc(); // => "Hello, world!"

// My attempt
/*
  One line 1 a variable is initialized to a string of "Hello, world!" at the global scope

  Then on line 2 a function called myFunc is declared 
    Within the functions scope a console.log method is invoked passed with the hello variable that is accessed globally. The console.log() method will display to the terminal the string "Hello, world!" whenever the myFunc function is invoked. 
    Furthermore, the myFunc function will invoke the console.log method which will display the words "Hello, world!" to the terminal but since the myFunc function is missing a return key word it will merely return undefined.
    
  Finally on line 6 the myFunc() function is invoked thus outputting to the terminal the string "Hello, world!"

  In conclusion this program is an example of how globally scoped variables can be accessed from within a local scope. 
*/

// LS answer
/*

    Example of describing the myFunc function with precision: 

        The myFunc function outputs "Hello, world!", which it obtains from the global variable "hello", then returns undefined. The function can use the "hello" variable because it is globally scoped, and functions have access to variables defined in the outer scope.

*/

// Q: In programming what are we always concerned with?
// A: I am concerned with the output and return value as well as any object mutation an non-local variables being used. 