# The Hell is the V8 engine anyways?

#### Overview

Q: What is Google's V8 engine?
A: V8 is an open source high performance JavaScript and WebAssembly engine, written in C++.

Q: What does the above definition of V8 actually mean?
A: Basically V8 is just a C++ program that which receives JavaScript code, compiles it, and executes it.

Q: What does V8 do?

1. Compiles and executes JS code
2. Handles call stack - running JS functions in some order
3. Managing Memory allocation for objects - the memory heap
4. Garbage collection - of objects which are no longer in use
5. Provides all the data types, operations, objects and functions

Q: What can V8 do?
A: Provides the event loop, but this is sometimes provided by the browser as well.

Q: What doesn't the V8 engine do?
A: V8 does is completely decoupled from the Document Object Model (DOM) - which is provided by the browser, and obviously is irrelevant to Node.js. V8 is built imperatively.

Q: How many threads does V8 have?
A: V8 is a single threaded execution engine. V8 is built to run exactly one thread per JS execution context.

Q: On runtime what is V8 mainly doing?

#### Other Key Components of the Chrome V8 Engine:

Q: What are additional key components to the google v8 engine?

Q: Where does V8 get its speed from?

Q: How does V8 solve the memory build up that results form JIT complication code that takes a large amount of memory?

Q: What is the TurboFan?

#### Web Assembly - LiftOff

Q: How does V8 achieve great performance?

#### Garbage Collection - Orinoco

Q: What does Orinoco do?

Q: What is another way Orinoco optimize performance?

Q: What is "black allocation"?

#### Conclusion

Q: What now?
