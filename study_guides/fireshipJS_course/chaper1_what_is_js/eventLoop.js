// Building an event loop from scratch:
//  From the most basic sense the event loop is just a while loop that waits for messages on the queue the processes their synchronous instructions to completion.

while (queueMicrotask.waitForMessage()) {
  queueMicrotask.processNextMessage();
}

const btn = document.getElementById("btn");

btn.onCLick = myCallbackFn;

// How do we do this all the time?
// - On the browser I am already doing this all the time by setting up an event listener on a button for a button click and when the user clicks that button its sends a message to the queue.
// - Then the runtime will process whatever javascript you defined as the callback for that event.
// - And this is what makes JavaScript non-blocking.

// JavaScript is non-blocking because all it ever does is listen to events and handles callbacks so JavaScript is never waiting for the return value of a function. The only thing it is doing is waiting for the CPU to process the synchronous code.
