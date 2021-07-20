// Breaking down the event loops iterations

// Imagine the first iteration of the event loop.
// - The event loop will first try to handle all the synchronous code in the script.
// - Next after the event loop is done running all the synchronous code it will check for any messages or callbacks in the queue to be executed.
// - So great touch point here is that the setTimeout won't be executed first because the event loop will execute synchronous code first.
// - Interestingly enough is that you can offload long running jobs to completely separate thread pools such as:
// - - In the browser making an HTTP Call that takes a few seconds to resolve
// - - In Node.js I may need to interact with the file system
// - - Browser APIs
// - - Anything Async
// - And I can do this with out blocking the main JS thread.

// Deeper dive:
// - That is almost everything I need to know about the event loop but JS had to make things a little more interesting by introducing "promises" and the "micro-task queue"
// - Now I would think that with the promise would have two async operation with 0 delay and the promise resolve would be executed after the setTimeOut right? But nope ... not really bro.
// - There is new mechanism called the microtask queue for promises which has priority over the main task queue used for DOM APIs, setTimeOuts and things like that. Which means that the handler for the promise will be called back first in this case.
//  So in order to what is executed from first to last

// Executed last
setTimeout(() => console.log("do this first?"), 0);

// Executed 2nd: Because the micro-task queue has priority whenever there is promise
Promise.resolve().then((v) => console.log("do this second?"));

// Executed 1st
console.log("Let there be JavaScript!");

// For Each round of the event loop:
// 1. Run sync code
// 2. Run Promise or microtask callbacks
// 3. Run async task callbacks
