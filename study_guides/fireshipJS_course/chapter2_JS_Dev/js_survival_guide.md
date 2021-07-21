### Objective

Q: What is the objective of the JS survival guide?
A: To prepare me for the "weird" features of JS. These concepts are very common pain points for developers, but they become relatively simple once you understand their relationship between your code and the JS engine. Not mention, these topics come up frequently in JS interviews.

### Primitive vs Object

Q: What are the lowest level building blocks of JS?
A: The building blocks of JS are primitive values.

- undefined
- null
- NaN
- booleans
- strings
- numbers
- bigInt
- symbol

Q: If something is not a primitive data type what data type is it?
A: Anything that is not a primitive is an object data type, or a descendant of one.

Q: What are objects?
A: Objects are collections of key/value pairs and are used as building blocks for more complex data structures.

### Truthy vs Falsy

Q: What happens when a value is encountered in a Boolean context?
A: For example when a value is encountered within an `if` statement it will become coerced into a boolean. If there the result is true then the value is `truthy`, and vice versa. If you are unsure about a value you can convert it using a logical `!` NOT operator twice, or a double bang as I like to call it `!!`

### Hoisting

Q: What does hoisting mean?
A: Hoisting mean that your declarations, i.e. functions will always be placed in memory at the top of the execution context.

Q: What is the code block displaying? What concept is being highlighted?
A: That before a file is compiled all functions are hoisted to the top of the file so you can actually call functions and or variable before the are initialized.

### Closures

Q: What is closure?
A: A closure is the combination of a function bundled together (enclosed) with reference to its surrounding state (the lexical environment). In other words, closure gives you access to an outer function's scope from an inner function.

Q: What is the lexical environment?
A: Every time the JavaScript engine creates an execution context to execute the function or global code, it also creates a new lexical environment to store the variable defined in that function during the execution of that function. A lexical environment is a data structure that holds identifier-variable mapping.
