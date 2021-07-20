// Q: When you run a JS program on a runtime environment ie (browser, or server) how does JS allocate memory?
/* Answer:

   1. Whenever a program is running on a environment it needs to allocate memory on my RAM, to store things for the runtime, and variables, and objects that I will reference in my code.

   2. JS also needs a thread form my CPU to execute instructions from my program.  

*/

// Q: What do we mean when we refer to JS as a high level language?
/* Answer: 

   - When defining JS a high-level language I am referring to the abstraction or simplification over the computers hardware and operating system.

   - Lowest level is machine code which is numeric.

*/

// Q: What is syntactic sugar?
/* Answer: 

   - In computer science and programming syntactic sugar is an implementation that aims to make things easier to read and express. The term comes form syntactic sugar's objective to make a language "sweater" for humans to use:
    - things can be expressed more clearly
    - concisely  
    - or an alternative style they may prefer

*/

// Q: What are the two fundamental ways we can translate programming language code to code that can actually be executed by the cpu?
/* Answer: 

   1. Interpreter
   2. Compiler

*/

// Q: Which way does JS execute code to the CPU?
/* Answer: 

    - JS is an interpreted language and which means it needs an interpreter in the actual environment in order to actually read the source code and execute it.
*/

// Q: Why is JS referred to as a dynamically typed language?
/* Answer: 

    - So unlike dart code for example in which you have to explicitly define what type of value the variable will store. You have to annotate things like int, String.

    Dart Code:

        String name = "Isaac";

        int age = 25;

        String greet() {
            return "Hello!";
        }

    - But on the other hand the JS types are unknown or implicit. And this only possible because the type is associated with a runtime value, and not the actual variables or functions in my code.

    JavaScript Code:

        let name = "Isaac";

        let age = 25;

        function greet() {
            return "Hello!";
        }


*/

// Q: What does it mean for JS to be a "Multi-Paradigm" language?
/* Answer:

   - The majority of general purpose programming languages are multi-paradigm allowing you to combine styles from both declarative (functional) programming and imperative (object oriented) programming.

*/

// Q: What is one stranger thing that I will hear about JS?
/* Answer:

   - That it is the only mainstream language that use prototypal inheritance.


*/

// Q: What is the gist of what it means for JS to use prototypal inheritance?
/* Answer:

   - Everything in JS is an object.
   - Each object holds a link to its prototype.
   - This link creates a prototype chain, which enables objects to inherit behaviors from other objects.

*/

// Example of prototypal inheritance:
// - Everything JS is an object
const Dog = { barks: true };

// - Each object holds a link to its prototype.
const Pug = Object.create(Dog);

// - This link creates a prototype chain, which enables objects to inherit behaviors from other objects.

Pug.barks; // => true

// This concept of using prototypal inheritance is core to makes JS so flexible multi-paradigm language.
