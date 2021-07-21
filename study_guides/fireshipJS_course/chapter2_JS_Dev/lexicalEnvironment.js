// The Lexical Environment:
/* Q&A:

// Q: When is the lexical environment created?
// A: Lexical environments are created every time you create a scope using curly brackets {}.

// Q: Where is the lexical environment? Does it actually exist?
// A: The lexical environment is created behind the scenes and does not actually exist. It is a logistical concept. There is no way to actually access if from JavaScript code.

// Q: How can you determine the structure of a program?

// Q: How can I craft an entire applications structure that determines its data conduit?

// Q: What is another way to term used for lexical context?

// Q: What does the scope (lexical context) determine?

// Q: What concepts are built on top of lexical environment?

// Q: What is the difference between the var and let key word?

// Q: What is the exception to the capability of var and let?


*/

// Most Outer Lexical Context (Global Scope) ------
var B = 1_000;
var C = 2_000;

{
  document.addEventListener("click", () => {
    A++;
    console.log(A + " " + B + " " + C);
  });

  {
    var A = 0;
    let B = 2;
    const C = 3;

    {
      //  Most Nested Lexical Context (Scope)
      // In closure
      (() => console.log(A, B, C, "test!"))();

      // In timeout callback
      setTimeout(() => console.log(A, B, C, "timeout"), 1_000);
    }
  }
}
