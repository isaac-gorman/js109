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
A: Multi-paradigm means that the language is general purpose or flexible. JS can be used for declarative (functional) or imperative (object-oriented) programming styles.

Q: What does declarative programming mean?
A: Declarative programming is a method to abstract away the control flow or flow for logic required for software to perform an action, and instead involves stating what the task or desired outcome is. Declarative programming is a high-level programming concept, which is the opposite of imperative programming.

Q: What does declarative mean?
A: In plain english declarative is of the nature of making declaration. In computing it is the denoting of high-level programming languages which can be use to solve problems without requiring the programmer to specify an exact procedure to be followed.

Q: What does imperative mean?
A: Of vital importance; crucial.

Q: What does imperative mean in programming?
A: Imperative programming is paradigm that uses statements that change a programs state. This is in contrast to declarative programming which is the defining what the program should accomplish without defining how it will achieve it.

#### Dynamically Weakly Typed

Q: What is a type system?
A: In programming a type system is a logical system of comprising of set rules that assign a property called a type to the various constructs of a computer program, such as variables, expressions, functions or modules.

Q: Why is JS known as a dynamic language?
A: Dynamic most often refers to the type-system. JS is dynamic weakly typed language, meaning you do not need to annotate variables with types (string, int, float, etc) and the true types are not known till runtime.

#### Prototypal Inheritance

Q: Does it mean for JS to be a prototypal inheritance capabilities?
A: Prototypal Inheritance means that objects can inherit behaviors from other objects. This differs from classical inheritance where you define a class or blue print for each object and instantiate it.

#### Event-Loop Concurrency Model

Q: What is a thread?
A: Threads in computing is short for thread of execution. Threads are a way for a program to divide (termed "split") itself into two or more simultaneously (or pseudo-simultaneously) running task.

Q: What does single threaded mean in terms of JS?
A: Single-Threaded means that JS can only ru one instruction at a time. Even if the CPU has multiple cores and available threads.

Q: How does JS handle jobs at the same time (i.e. concurrently)?
A: Using the event loop.

Q: What is an event loop?
A: The event loop refers to a feature implemented by engines like V8 and spider monkey that allow JS to offload task to separate threads. Browser and Node APIs execute long-running task separately from the main JS thread, then enqueue a callback function (which I define) to run on the main thread when the task is complete.

Q: Why is JS called "non-blocking"?
A: JS is called non-blocking because it should only ever wait for synchronous code form your JS functions. Think of the event loop as a message queue between the single thread and the OS.
