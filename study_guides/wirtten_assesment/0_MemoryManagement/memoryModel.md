# JavaScript Data Model

### Overview

**Q: As programmers what do we do on a daily basis?**
Answer: On a daily basis we declare initialize or not initialize and alter values of variables later on is something that is core to what we do.

**Q: How does JS actually declare and initialize variables under the hood?**
Answer: More questions... how does JS handle basic functionality, and why does it benefit me to understand the minutia of JS under the hood?

**Q: What are the 4 components that are important to understand how JS variable declaration, initialization, and reassignment actually works?**

1. Variable declarations and assignments for JS primitives
2. JavaScript's memory model: the call stack and the heap.
3. Variable declarations and assignments for JS non-primitives
4. let vs const
5. Why is this above information useful for us to know?

### 1. Variable declarations and assignments for JS primitives

**Q: What are the three steps that happen when execute your JS code?**
Answer:

```javascript
let myNumber = 23;
```

Above when I declare and initialize the variable `myNumber` to `23` at an abstracted level three things are occurring.

    1. We are creating a unique identifier for the variable called `myNumber`.

    2. At runtime the JS engine allocates an address in memory for the variable `myNumber`.

    3. At runtime the JS engine stores (initializes) the value of `23` at the address allocated in step 2.

**Q: What is more technical definition for defining what a variable equals?**
Answer: Ordinarily we would say that the variable `myNumber` equals `23` but technically speaking `myNumber` equals the memory address that holds the value of `23`. There is a crucial distinction going on here from what we "colloquially" say when it comes to variables and the connection to their values and what is going on under the hood.

**Q: What is going on under the hood when we assign a variable to an already existing variable?**
Answer:

```javascript
let newVar = myNumber;
```

Technically speaking since `myNumber` is equal to memory address `0012CCGWH80`, `newVar` would also equal the same memory address `0012CCGWH80`, which is the same memory address that holds the value `23`. Ultimately this is why it is "colloquially" said that `newVar` now equals `23`.

**Q: What happens when I add 1 to the existing variable? What is going on under the hood? (the runtime)**
Answer:

```javascript
myNumber = myNumber + 1;
```

Now that have added 1 to the variable `myNumber`'s value it will evaluate to `24`. But what about the `newVar` variables value, will it also be `24` since both variable identifers point to the same name in memory?
... No. The `newVar` variable will remain unaltered. Why?
In JS primitive data types are immutable, when `myNumber` is incremented by 1 `myNumber = myNumber + 1` it will indeed resolve to `24` however JS will allocate a new address in memory to store the new value of `24` and `myNumber` will point to the new address.

**Q: What actually happens when we append a character to an existing string?**
Answer:

```javascript
let myString = "abc";
myString = myString + "d";
```

In the above code a novice programmer would say that the character `d` is simply being appended to the string `abc` wherever in memory it exist, however this is technically false.

Whenever any existing string such as `abc` is concatenated with another character and in our case `d` since the string are primitive data types in JS, a new address in memory is allocated for the concatenated string value `abcd` and now the variable `myString` points to this new memory address.

Q: What is the objective of the next section of the JS data model annotation?
Answer: The section is to understand where and when this memory allocation is happening.

### 2. JavaScript memory model: the call stack and the heap

**Q: The purpose of abstraction what are the main two components of memory in the JS runtime?**
Answer: The call stack and the heap.

**Q: Where are primitives variables and function calls stored?**
Answer: Primitive values and function calls are stored on the call stack

**Q: In the call stack what do variables actually point to?**
Answer: In the model the variables are represented as pointing to the values directly when in reality the variable is actually pointing to an address in memory that points to it's initialized value.

**Q: Where do none primitive values get stored?**
Answer: Non-primitive values are stored in the heap. The heap stores unordered data that can be stored and grow dynamically. The heap is perfect for objects, arrays, and functions (functions are objects too).

### 3. Variable declarations and assignments (initialization) for JS non-primitives

**Q: What is the difference between js primitives and non-primitives**
Answer: The biggest difference between JS primitives and non-primitives is in their behavior and how they are stored and passed around?

**Q: How many steps occur when you initialize a variable to a non-primitive value in JS under the hood?**
Answer:

```javascript
let myArray = [];
```

Above I just declared a variable identified as `myArray` and I initialized it to an empty array.

Whenever I initialize a variable to non-primitive data type the following happens within the runtime environment:

1. Just like primitive variable a unique identifier is created in our case it is `myArray` this identifier will be our pointer an address on the call stack
2. A memory address is allocated (this will happen at runtime)
3. Store a value of a memory address allocated in the heap (this will happen at runtime)
4. The memory on address on the heap will store the empty array `[]` value

Q: What is going on between the call stack and the heap?
Answer: Unlike primitive values where the address and the value are stored in the stack. Non-primitive values store two address in the stack an address that is pointed to by the variables identifier and then another address that points to the object value (non-primitive) in the heap.

### 4. let vs const

Q: What variable declaration key word should we use most often and when should we use the other?
Answer:

Q: What do we really mean by change? What is often a mistake we make when we think of change in terms of a variable?
Answer:

Q: How and why did the programmer use let in the incorrect way?
Answer:

**Q: What is the correct way to interpret change in terms of a variable?**
Answer: Change in address not value. Non-primitives data types do not change in address unless they are re-assigned. But altering the values within the object are not going to change the address associated with the variable.

Q: What is occurring when we declare importantID?
Answer:

Q: What happens when 100 is assigned to important ID?
Answer:

Q: Why are novice programmers incorrectly using the let key word?
Answer:

Q: When myArray is declared what is actually happening under the hood?
Answer:

Q: What is the key concept that is being highlighted when we are pushing elements (numbers) on to the myArray array?
Answer:

Q: What would cause myArray to throw an error?
Answer:

Q: What is occurring in the runtime that cause the error?
Answer:

Q: So what can/can't you do with non-primitives declared with the const keyword?
Answer:

### 5. Why is this above information useful for us to know?

Q: So why is the above information useful?
Answer:

Q: What does Google do?
Answer:

Q: What can we infer as to why Google doesn't allow the use var and only let and const?q
Answer:
