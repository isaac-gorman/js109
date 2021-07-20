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

setTimeout(() => console.log("do this first?"), 0);

console.log("Let there be JavaScript!");
