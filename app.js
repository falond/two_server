// Require/import the HTTP module
var http = require("http");
var Twitter = require("twitter");


var twitterKeys = {
  consumer_key: 'uroWQ0gBJR75TnmmYfC2a0nr8',
  consumer_secret: '7cL6ahdwXoHvnAjHwMsaBk68hRSvqH0AIrBiazlZQ2IKaYbII5',
  access_token_key: '913252348109221888-YHbbmfT4FuKzk968DPOLO71Vrn3UnuU',
  access_token_secret: 'WUWpwomFcSvmMtGtBbKcWoXkf0hCMc3PIR258M5YavrQ5',
}

// Define a port to listen for incoming requests
var PORT1 = 7000;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Your so Awesome!!!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});



// Define a port to listen for incoming requests
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("YOU SUCK!!!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});

