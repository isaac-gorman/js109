function outer() {
  let count = 0;
  // count persist in memory after outer is popped off the call stack
  // count will most likely be stored in the heap

  function inner() {
    console.log("count: ", count);
    count++;
    return count;
  }

  return inner;
}

// Creates the Closure
const addOne = outer();

// Operates within its context or scope or lexical environments
console.log(addOne());
console.log(addOne());
console.log(addOne());
