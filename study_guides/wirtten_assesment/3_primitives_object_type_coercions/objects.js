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

// Dot Notation:

// Q: How can we access data on an object?

// Q: How can we manipulate the data on an object?

// Q: How we add properties to the object?

// Bracket Notation:

// Q: What is another way you can access information on an object?

// Bracket Notation vs. Dot Notation:

// Q: In JS what data types are keys?

// Q: Why did person.key return undefined?

// Q: What and why did person[key] return what it did?

// Object Methods:

// Q: What are object methods used for?

// Q: What are the most common object methods?

// Q: What does the method Object.entries() do?

// Q: What does the method Object.keys() do?

// Q: What does the method Object.values() do?

// Q: What does the method delete <object>.key do?

// Q: What does Object.assign() do?
