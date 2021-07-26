var foo = 1;

function bar() {
  if (foo == undefined) {
    var foo = 10;
  }

  console.log(foo);
}

bar(); // 10

// Q: Why does the var key word enable such a strange output?
/*

   1. Remember that the var keyword is function scoped

   Q: Why is foo undefined? Even though it has been globally scoped?
   - A: So one thing that is occurring here is variable hoisting 

        Q: What is variable hoisting? 
        - A: Variable hoisting is when we declare a variable further down the line (file) but upon runtime the interpreter instead of actually declaring and initializing it within the if block (where we explicitly declare and initialize foo) the interpreter automatically declares the var foo; variable at the top of the function scope, then explicitly initializes the foo variable within the if block to = 10. This gives the var variable a the scope to be accessible from anywhere within the function scope.


*/
