const HTTP = require('http');

//require two ports
const PORTONE = 3000;
const PORTTWO = 3001;

//create two different functions to handle requests; one is
//needed for each port.
function handleRequestOne(request, response) {
    response.end("You're on port one!");
}

function handleRequestTwo(request, response) {
    response.end("Maybe you're not as good at this as you thought.");
}

//create servers
const SERVERONE = HTTP.createServer(handleRequestOne);
const SERVERTWO = HTTP.createServer(handleRequestTwo);

SERVERONE.listen(PORTONE, () => {
    console.log('Server listening on: http://localhost: ' + PORTONE);
});

SERVERTWO.listen(PORTTWO, () => {
    console.log('Server also listening on: http://localhost: ' + PORTTWO);
});