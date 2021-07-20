// Building an event loop from scratch:
//  From the most basic sense the event loop is just a while loop that waits for messages on the queue the processes their synchronous instructions to completion.

while (queueMicrotask.waitForMessage()) {
  queueMicrotask.processNextMessage();
}
