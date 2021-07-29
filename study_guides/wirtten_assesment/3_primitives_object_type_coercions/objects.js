// Object deep dive:

// Q: What is an object?
/* Answer: 

   - An object is a collection of related data. Objects are structured within brackets in key, value pairs in order to store data. Objects are really useful to retrieve and use data later.

*/

// Q: How could we organize people who signed up on a website?
/* Answer: 

   - To organize the people who signed up for the website could store them within an array. We would want to store attributes about them such as name, age, and nationality. Within this array we would organize each person by attributes in an object for each person. 

*/

// We could create an object for just one person who signed up:
const user = {
  name: "Arik Gorman",
  age: 15,
  nationality: "American",
};

// We could however store multiple users within objects in an array:
const users = [
  {
    name: "Arik Gorman",
    age: 15,
    nationality: "American",
  },
  {
    name: "Jasmine Gongora",
    age: 24,
    nationality: "American",
  },
  {
    name: "Step",
    age: 0.1,
    nationality: "Martian",
  },
];

// Q: What are ways we can manipulate data of an object?
/* Answer: 

   - There are two ways to manipulate objects 
     1. dot notation
     2. bracket notation
   
*/

// Dot Notation:

// Q: How can we access data on an object?
/* Answer: 

   - If I wanted to access values on the users object from above I could use dot notation.
   
*/

console.log(user.name); // => "Arik Gorman"
console.log(user.age); // => 15
console.log(user.nationality); // => "American"

// Q: How can we manipulate the data on an object?
/* Answer: 

   - We can also manipulate the data on an object by using dot notation.
   
*/

user.age = 16;
console.log(user.age); // => 16

// Q: How we add properties to the object?
// A: I can add new data using dot notation

user.hobbies = ["baseball", "netflix", "video games"];
console.log(user);
/*
  
{
  name: "Arik Gorman",
  age: 16,
  nationality: "American",
  hobbies: ["baseball", "netflix", "video games"],

}

*/

// Bracket Notation:

// Q: What is another way you can access information on an object?
// A: Another way we can access an manipulate data an object is using bracket notation. We do this by passing the stringified key from which we want the value.

const car = {
  make: "BMW",
  model: "M3",
  year: 2005,
};

console.log(car.make); // => "BMW"
console.log(car.model); // => "M3"
console.log(car.year); // => 2005

// Bracket Notation vs. Dot Notation:

// Q: In JS what data types are keys?
// A: In JS keys of an object are all strings. Even though we do not explicitly type them as strings they are all converted to strings under the hood. And this often leads to unexpected issues when using dot notation.

const person = {
  age: 20,
};

const key = "age";

console.log(person.key); // => undefined
console.log(person[key]); // => 20

// Q: Why did person.key return undefined?
// A: person.key returned undefined because js started looking for a key called "key" which it does not have so it returned undefined. Just understand that dot notation only allows you to access the explicitly defined key name of object properties.

// Q: What and why did person[key] return what it did?
// A: On the other hand person[key] returns what we expect it to return => "20". This is be because brackets evaluate statements. AKA JS interprets (or unboxes) statements. The JS interpreter sees the first bracket and then keeps going till it hits the last bracket. In this situation key evaluates to the value "age" which is a key within the object that has a property pair.

const details = {
  props: "species",
};

const pet = {
  name: "Step",
  species: "Cat",
  age: 0.1,
};

pet.details.props; // error occurs because pet does not contain a key of details

pet[details["props"]]; // => "Cat"
// This occurs because details["props"] evaluates to "species" and pet["species"] evaluates to "Cat."

// Object Methods:

// Q: What are object methods used for?
// A: Object methods are commonly used accessing, manipulating, or deleting data from objects.

// Q: What are the most common object methods?
/* Answer

   - The most common object methods are: 

     - Object.keys()
     - Object.entries()
     - Object.values()
     - Object.assign()
     - delete object.key

*/

const bird = {
  color: "yellow",
  size: "small",
  type: "tropical",
};

// Q: What does the method Object.entries() do?
Object.entries(bird);
/* Answer:

   -  Object.entries() will return an array of arrays containing the key value pairs of bird
 
   Object.entries(bird) => [
       ["color", "yellow"],
       ["size", "small"],
       ["type", "tropical"]
   ]


*/

// Q: What does the method Object.keys() do?
Object.keys(bird);
/* Answer

   - Objects.key(bird) method will return an array of all the keys of the bird object. 
   => ["color", "size", "type"]

*/

// Q: What does the method Object.values() do?
Object.values(bird);
// A: Object.values(bird) is going to return an array of all the properties of the bird object => ["yellow", "small", "tropical"]

// Q: What does the method delete <object>.key do?
delete bird.type;

// Q: What does Object.assign() do?
// A: Object.assign() is used to add property to an object
Object.assign(bird, { hungry: true });
