// Q: What is the objective of this annotation?
// A: My objective is to learn about the JS call stack which is the mechanism that keeps track of function calls.

// Introduction to the Javascript Call Stack

// Q: What is a execution context?
// A: The JS execution context is an abstract concept that holds information about the environment within which the current code is being executed. Remember: the JavaScript engine creates the global execution context before it starts to execute any code.

// Q: What does JavaScript use to manage the execution context?
// A: The JavaScript Engine uses a call stack to manage the global execution context, and the function execution context.

// Q: What is the acronym LIFO stand for?
// A: LIFO stands for last in first out. And the call stack is based on this rule.

// Q: What principle does is the JS call stack based on?
// A: Last in first out.

// Q: What happens when you execute a script in the JS engine?
// A: Whenever you execute a script the JS engine creates a global execution context and pushes it on top the call stack.

// Q: What occurs if a function is called?
// A: Whenever a function is called the JS engine creates a function execution context for the function, pushes it on top of the call stack and stars executing the function.

// Q: What occurs when a function calls another function?
// A: If a function calls another function the JS engine creates a new function execution context for the function that is being called ans pushes it to the top of the call stack.

// Q: What happens when the current function completes?
// A: Whenever the current function completes the JS engine pops that function off the call stack and resumes to executing where it left off in the last code listing.

// Q: When will the script stop?
// A: The script will stop when the call stack is empty.

// JavaScript Call Stack Example

let yUniqueValue = 20;

let lUniqueValue = 40;

function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let xUniqueValue = average(yUniqueValue, lUniqueValue); // => 30

console.log(xUniqueValue);

// Q: What happens when the script runs?
// A: When the JS runs the JS engine will place the global context (denoted main() or global()) function on the call stack

// Q: After the the JS engine places the global context (denoted by main or global()) what happens next?
// A: The global execution context enters the creation phase and moves to the execution phase. The JS engine begins to execute the call to the average(10, 20) function and creates a function execution context for the average function and pushes it to the top of the call stack

//

// Asynchronous JavaScript:

// Q: Type of thread does JS use?

// Q: In what order does JS execute script?

// Q:
