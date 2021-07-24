// JavaScript Execution Context

// Q: What is the objective is this annotation?
// A: The objective of this annotation is to learn about the JavaScript execution context to deeply understand how JavaScript code gets executed.

let x = 10;

function timesTen(a) {
  return a * 10;
}

let y = timesTen(x);

console.log(y); // => 100

// The above code is relatively straight forward but behind the scenes, JS does many things.

// Q: What happens when the JavaScript engine executes a script?
// A: Whenever the JS engine executes code it creates an execution context. Each execution context has two phase the creation phase and the execution phase.

// Q: What are two phases of the execution context?
// 1. The Creation Phase
// 2. The Execution Phase

// Q: What happens when JavaScript is executed for the first time?
// A: Whenever JS code is executed for the first time the JS engine (V8) creates a Global Execution Context. During the creation phase, the V8 engine performs the following task:

// Q: What are the task the JS engine does the first time a JS engine is executed?
// 1. Creates a global object i.e. teh window object on the browser or the global object in Node.js
// 2. Creates a this object binding which points to the global object above
// 3. Sets up a memory heap for storing variables and function references
// 4. Stores the function declarations in the memory heap and the variables within the global context with the initial values as undefined.

// Q: What is occurring the code above during the execution phase?
// A: During the execution phase the JS engine stores the variables x and y and the function declaration timeTen() in the Global Execution Context. In addition the engine will initialize the variables x and y to undefined.

// Q: After the creation phase what is next?
// A: After the creation phase the global execution context moves to the execution phase.

// The Execution phase
// Q: During the execution phase what happens?
// A: During the execution phase the JS engine executes the code line by line. In this phase, it assigns values to variables and executes the function calls.

// Q: When does the JS engine create a new function execution context?
// Q: For every function call, the JS engine creates a new Function Execution Context. The function execution context is similar to the Global Execution context, but instead of creating the global object, it creates the arguments object that contains a reference to all the parameters passed into the function:

// Q: In our example what is occurring in the function execution context?
// A: In the function execution context our execution context creates the arguments object within the function execution context that will reference all the parameters passed into the function, sets this value to the global object and initializes the a parameter to undefined.

// Q: When does 10 get assigned to the parameter a?
// A: Finally during the execution phase of the function execution context, it assigns 10 to parameter a and returns the result 100 to the global execution context

// Q: How does the JS engine keep track of all the data it is executing?
// A: In order to keep track of all the execution context including the Global Execution Context and Function Execution Contexts, the JS engine uses a data structure named the "Call Stack".

// Q:
