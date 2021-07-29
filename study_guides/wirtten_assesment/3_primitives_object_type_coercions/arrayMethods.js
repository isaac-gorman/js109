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

// .join()
// Q: What does .join() do?
// A: The .join method returns a string of the elements within an array, separated by an optional separator. By default the join method will join all the elements and separate them by a comma. Further more by default all the elements will be converted to a string. Also this method returns a new data type and does not modify the array it is called on.

// .lastIndexOf()
// Q: What does the lastIndexOf array method do?
// A: The lastIndex of array return the last index of the element you have passed as an argument. If no element is found -1 gets returned.

// .map()
// Q: What does the map method do?
// A: Creates a new array based on the function that was passed as an argument (its callback)

// .pop()
// - pops the last element of an array and return it. This method modifies the original array

// .push()
// - push appends an element to the end of the array. Oddly enough if you where to initialize a variable with  push method the variable will be linked to the value of the length of the new array.

// .reduce()
// Q: What does the reduce method do?
// A: The reduce method reduces the elements of an array to a single value form left to right from index 0 to the end of the array. The reduce method receives at least two arguments the accumulator, and the current value. In the example above I did not provide an initial value thus the reduce method started at the index of 1. Thus if I wanted to reduce the values and start at another initial value I could do that by assigning an initial value and starting the accumulator at the index of 0.

const randomNums = [5, 3, 18, 9, 11];

let sum = randomNums.reduce((acc, crrV) => acc + crrV, 100);
// console.log(sum); // => 146

// .reverse()
// - the reverse method modifies an array in place.

randomNums.reverse();
// => [11, 9, 18, 3, 5]

// shift()
// Q: What does the shift() method do?
// A: The shift method removes the first element of an array, and returns that value. It modifies the original array.

// .slice()
// - The slice method is often used to make a shallow copy of an array. The slice method selects specified parts of an array based on passed argument and returns a new array. The method receives two arguments the start index, and the end index + 1.

// .some()
// Checks is at least one element in the array passes the condition.

// .sort()
// Sort sorts elements in an array. By default the elements are sorted in ascending order, built upon converting the arrays elements into strings, then comparing their sequence of UTF-16 code unit values. So if you have numbers this may get tricky so you must add your own logic here by passing the methods callback two arguments for the first and second element often accepted convention is just a, and b

// .splice()
// Q: What is the splice() method?
// A: The splice method changes the contents of an array (mutates) by removing or replacing existing and/or adding new elements in place. If you want to only access part of an array with modifying it use slice() instead.

// .toString()
// - Converts an array to a string

// unshift()
// - adds an new element to the beginning of an array and returns the length of the new array.
