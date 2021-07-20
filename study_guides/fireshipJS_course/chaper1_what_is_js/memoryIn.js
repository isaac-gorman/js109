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

// Allocation via function call
// - Some function calls result in object allocation.
var date = new Date();
// ^ JavaScript allocates a Date object in memory

var domElement = document.createElement("div");
// JavaScript allocates a DOM element in memory

// Using Values
// Q: What does it mean to use values?
// A: Using values basically means reading and writing in allocated memory. This can be done by reading or writing the value of a variable or an object property or even passing an argument to a function.

// Release when the memory is not needed anymore:
// Q: When do the majority of the memory management issues occur?
// - A: The majority of memory management issues occur when memory is not needed anymore.The tricky part here is determining when the allocated memory is no longer needed.

// Q: What do lower level languages require developers to do?
// - A: In lower level languages like C the developer has to determine at which point in the program the allocated memory is no longer needed and release it.

// Q: What mechanism of memory management does memory management use?
// - A:  In higher-level languages, such as js use an automatic mechanism of memory management known as "garbage collection"

// Q: What is the purpose of the garbage collector?
// - A: The purpose of the garbage collector is to monitor memory allocation an determine when a block of allocated memory is no longer needed and reclaim it. But this process is not perfect because determining wether or not a specific piece of memory is still needed is undecidable.

// Q: What is a prototype?
// - A: When it comes to inheritance, JavaScript only has one constructor: objects.

// Q: What is inheritance?
// -A: Inheritance is an important concept when it comes to object oriented programming. In classical languages methods from base base class get copied into a derived class. In JavaScript inheritance is supported by using prototype object.
