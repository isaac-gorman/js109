## Lecture 2: How JavaScript Works

**Key terms and concepts related to the inner workings of JavaScript**

#### Overview

Q: What is the definition of JS?
A: JavaScript is often defined as a _"high-level, single-threaded, garbage-collected, interpreted (or just-in-time compiled), prototype-based language, multi-paradigm, dynamic language with a non-blocking event loop"_.

#### High Level

Q: What does high-level mean in the context of JavaScript?
A: When referring to JavaScript as a high-level language we are defining JavaScript as an abstraction over the machines bare-metal hardware.

Q: Why is JavaScript considered high-level?
A: JavaScript is considered high level because it does not provide access to a machines operating system or hardware. Nor does JS require access to os nor hardware.

Q: What is one reason that JS is different then other languages?
A: JavaScript unlike C/C++ does not require memory management because the the JS **runtime** always uses garbage collection.

Q: What is a runtime?
A: The JavaScript runtime refers to where your code is executed when you run it. That being said JavaScript can be run on Chrome which runtime is V8, Firefox which runtime is SpiderMonkey.

Q: What is garbage collection?
A: Most low-level languages like C, have manual memory management primitives such as malloc(), and free(). In contrast JS automatically allocates memory when objects are created then frees it when they are not used anymore they are garbage collected. But this does not mean that I shouldn't care about memory management. Developers need to be familiar with the memory life cycle.

Q: What is the life cycle of memory?
A: The memory life cycle is pretty much the same across all languages.

1. Allocate the memory needed
2. Use the allocated memory (read, write)
3. Release that allocated memory when it is not needed anymore.

#### Interpreted of Just-in-Time Complied

Q: What is byte-code?
A: Byte code is the "middle man" intermediate code between the source code and the machine code.

Q: What does interpreted mean?
A: Interpreted in CS means that source code is converted to byte-code and executed at run time (as opposed to being compiled to a machine code binary at build time.)

Q: Why is JavaScript common called a "scripting language"?
A: Because originally JS was only interpreted (converted to byte-code).

Q: What have modern JS engines enabled for developers?
A: Modern JS such as V8, Spider-monkey, and Nitro use various techniques to preform "Just-in-Time Compilation" of "JIT" for better performance. Now developers still use JS like an interpreted language, while the engine magically compiles parts of the source code to low level machine code behind the scenes.

#### Multi-Paradigm

Q: What does it mean for a programming language be multi-paradigm'ed?

#### Dynamically Weakly Typed

Q: What is a type system?

Q: Why is JS known as a dynamic language?

#### Prototypal Inheritance

Q: Does it mean for JS to be a prototypal inheritance capabilities?

#### Event-Loop Concurrency Model

Q: What is a thread?

Q: What does single threaded mean in terms of JS?

Q: How does JS handle jobs at the same time (i.e. concurrently)?

Q: What is an event loop?

Q: Why is JS called "non-blocking"?
