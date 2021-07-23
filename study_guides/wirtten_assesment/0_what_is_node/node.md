#### Ryan Dahl Original Node presentation

Q: How does the creator of Node.js Ryan Dahl define Node.js?
Node.js:

- Server side JavaScript platform
- Built on Google's V8 engine
- Evented non-blocking I/O. Similar to EventMachine and Twisted
- Uses the CommonJS module system
- Is written in 8,000 lines of C/C++, 2,000 lines of JavaScript, with 14 contributors.

Q: Why are we doing I/0 wrong? Why does it need to be done differently?
A: We are thinking about I/O makes things difficult. Doing any sort of application or server makes things difficult because of the way we are implementing I/O.

Q: In many web applications what occurs?
A: You query a database for some result from the database then you use the result. But what is my web application doing while the database request is running?

A: In many cases the application is doing nothing.

Q: So what is a better solution?
A: You want your application to multitask and not have to wait on a request thats speed is dependant on array of variables such as disk speed, latency etc. Thus you want to have other threads of execution that can run while the request is waiting to be fulfilled.

Q: So what was NGINX, and Apache doing right and what are they doing wrong?

**Apache vs NGINX**

_concurrency x req/sec_

![Image of graph of apache vs nginx performance]
(https://www.nginx.com/wp-content/uploads/2014/04/requests-per-second-nginx-vs-apache.jpg)

# Test!!
