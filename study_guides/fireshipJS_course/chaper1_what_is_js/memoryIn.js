// Allocating Memory In JS

// Value Initialization:
// Q: How does JS not bother the developer with memory allocation?
// A: JS automates the process of memory management, by automatically allocating memory when values are initially declared.

var number = 123; // Allocates memory for a number
var string = "Hello"; // Allocates memory for a string

var object = { firstName: "Isaac", age: 25 }; // Allocates memory for object and contained properties

var array = ["a", "b", "c"]; // Allocates memory for the array and it's contained values similar to the object, which is saved as an object

function sum(num1, num2) {
  return num1 + num2;
}
// Allocates memory for the function which is actually a callable object which is saved like an object

array.forEach((letter) => console.log(letter));
// Allocates memory for this function expression like an object
