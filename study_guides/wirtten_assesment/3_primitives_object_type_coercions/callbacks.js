// Callbacks

// Q: Can functions a receive functions as arguments?
// A: Yes function can receive function as arguments.

// Q: Functions that receive functions as arguments are called what?
// A: Functions that receive functions as arguments are called higher order functions. Functions that are passed to other functions are called callback functions. So the higher order function is receiving a callback function. And the callback is being passed to a higher order function.

const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

const calculate = (num1, num2, callbackFn) => {
  return callbackFn(num1, num2);
};

calculate(2, 2, multiply); // => 4
calculate(10, 12, multiply); // => 120
calculate(10, 12, add); // => 22

// Q: What is occurring the code above?
// A: In the code above we are first declaring two arrow functions add, and multiply. Later I define an other function called calculate that receives three arguments: the first two are numbers in which I can do calculations on and the other paramter is the function we can pass. Finally on the last lines we invoke the calculate function and dynamically pass it numbers and the either two of the functions as callbacks from above add or multiply.

// Asynchronous Callbacks?

// Q: What are callbacks often used for?
// A: Callbacks are at times used for asynchronous programming. Callbacks are used to make sure certain code doesn't execute until other code has already executed. The callback function is not run until the containing function invokes it, or call it back. Once the containing function has stopped running, it calls back the function that was passed in the parameter, hence the name callback function. More on this when I get to promises, and async/await.
