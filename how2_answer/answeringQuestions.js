// How to answer coding questions eloquently
/* - Key Points
  Q: What will I be tested on when I am answering questions in the exam and interview?
  
  A: I will be tested on my understanding based on: 
     - ability to analyze (parse a) program into its parts and describe each of their roles to precision

     - my knowledge of a specific syntactical aspect or language specific feature in JavaScript 

     - check my understanding of the deeper underlying principles; such as the fundamentals of the JavaScript language or a non-language specific programming concept.


  Q: How should I answer questions? 

  A: When answering questions I should: 
   - Explain my reasoning with reference to specific lines in the program. Use line numbers to refer to particular lines of code when necessary. 

   - Make sure to answer with extreme precision. Don't say function say function invocation or function definition when they are appropriate. Develop a Precise Language. 

   - Highlight any specific syntactical conventions or technical observations where its is relevant.

   - Identify the fundamental concept or concepts demonstrated by the question. 


*/

// Example:
/*
   Q: Why does the last line output "Hi" rather than the string "Hello"? 
   
   Explain what is happening and be sure to identify the underlying principle that is demonstrated.
*/

let greeting = "Hello";

while (true) {
  greeting = "Hi";
  break;
}

console.log(greeting);

// My explanation:
/*
  Framework: 
  - What is happening in each piece of the program?
  - - User "Precise Language" be very explicit when describing what is happening.
  - - What are specific syntactical choices that are being made? 
  - - Is there anything that is core to JS or a general programming concept?
  - - Make specific reference to specific lines in the program
  - Identify underlying principle
  - - What is the problem or solution that is being used to present a fundamental principle to JS or programming in general? 

  My attempt: 

  - What is happening in the program?
  - - On line 1 a variable called greeting is being assigned to the string "Hello"
  - - On line 3 - line 6 there is while loop that has been executed that loops while its condition is still true. 
  - - the condition is being evaluated as true as long as true the boolean is true. Which is a syntactical convention often used with a break; statement to terminate the loop or else the while loop would loop infinitely.
  - - Within the while loop on line 4 the greeting variable is being re-assigned globally to the string "Hi"
  - - Right after the re-assignment on line 5 the break; key word is called which breaks the while loop regardless of its condition. 
  - - Finally on line 8 the console.log() method is being invoked with the greeting variable as an argument which will output to the terminal "Hi". As it was globally re-assigned from within the while loop above on line 4.

*/
