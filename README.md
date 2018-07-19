# TwoServers
An app that has two servers, no express.

## How to:
It's pretty simple. It just requires a little more code.

1) Require HTTP

2) Declare two PORTs, each with a different port number; otherwise, the app'll blow up in your face.

3) Create two functions to handle requests and responses.

4) Create two servers, passing one of the functions through each.

5) Start both of the servers.

6) Console.log each to see that they are running.

7) Run: node whateverTheFileIsCalled.js