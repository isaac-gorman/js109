// .concat()
// Q: What does concat() do? Does it mutate?
// A: The .concat() method joins two arrays, and returns a shallow copy of the arrays. So
const lotteryNumbers = [192, 43, 8, 98, 32, 1];

const newNumbers = [78, 45];

lotteryNumbers.concat(newNumbers);
// => [192, 43, 8, 98, 32, 1, 78, 45]

// .every()
// Q: What does the .every() method do, does it mutate the existing array?
// A: The every() method checks if every element in an array returns true for a certain condition. Only if the condition is true for every element in the array, true gets returned. The every method does not mutate the array it is called on.

const nums = [192, 43, 8, 98, 32, 1];

nums.every((x) => x > 2); // false
nums.every((x) => x > 0); // true
nums.every((x) => x < 200); // true

// .fill()
// Q: What does the fill method do?
// A: The fill method mutates the original array by allowing you to modify the original array and fill it with a static value

const newNums = [1, 2, 3, 4, 5];
newNums.fill("🦖", 2, 3);
// =>  [ 1, 2, '🦖', 4, 5 ]

// .filter()
// Q: What does filter do?
// A: The filter method return a new array with all the values that return true for the condition

const randommAges = [23, 17, 9, 13, 30, 55];
const teenagerAges = randommAges.filter((age) => {
  return age < 19 && age >= 13;
});
// => [ 17, 13 ]

// .find()
// Q: What does the .find() method do?
// A: The .find() method does not modify the original array and is used to return the first value for which the condition (test case) returns true. This method actually returns a value not an array or a boolean value.

const firstNames = ["Isaac", "Jasmine", "Arik"];
let shortNames = firstNames.find((firstName) => firstName.length <= 4);
// => "Arik"

// .findIndex()
// Q: What does findIndex do?
// A: findIndex method returns the first element for which the condition is true.

const pets = ["cat", "dog", "bird"];

let indexOfDog = pets.findIndex((pet) => pet === "dog");
// => 1

// .forEach()
// Q: What is the .forEach method?
// A: The forEach function calls function on each element of an array and is capable of mutating the array in which it was called upon from its callback. Also .forEach always returns undefined.

const lowNumbers = [1, 2, 3, 4];

lowNumbers.forEach((num, index) => {
  return (lowNumbers[index] *= 10);
});

// console.log(lowNumbers); // => [ 10, 20, 30, 40 ]

// .indexOf()
// Q: What does indexOf() do?
// A: The indexOf() method returns the index of the element in the array that it is called upon.

const hobbies = ["video games", "reading", "boxing", "mountain biking "];

hobbies.indexOf("reading");
// => 2

// Array.isArray()
// Q: What does Array.isArray() do?
// A: Simply the Array.isArray() method evaluates whether the passed argument is an array or not. Return true if it is an array.
