///Node utilizes http to transfer data to a server, there are multiple ways http achieves this. You can pass through Html files, Json files, direct html or direct text. I've shown direct text and html file options below. It will listen to the server and pass through data
var http = require("http");
var fs = require('fs'); /// used to callback HTML file

port = 3000; ///defines user port 
host = "localhost";/// defines user hostname

serverText("Welcome to the http portion of core global objects")/// defines text that will show on text base http server
serveFile('http.html');/// calls and listens to file data

/// you will have to comment out one of the two examples to view the other. Thank you 

/// The below function will directly push the text we want to send to the server, it will also show in the console that our data was sent to the server

function serverText(innerText) {
  http.createServer(function (req, res) {
      console.log(`Server is running on http://${host}:${port}`)/// shows what port and hostname the data was sent to 
      console.log("text was sent to server .");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(innerText);
      res.write(",I hope you're having a great day");/// writes this text along with serverText, to our localhost server
      res.end();
    })
    .listen(3000); /// looks for a connection to port 
  }
/// you will have to comment out one of the two examples to view the other. Thank you 

/// The below function will call data from the http.html file and will push it to our server 
  function serveFile(filename) {
    http.createServer(function (req, res) {
      fs.readFile(filename, function(err, data) {
        if(err)/// if file cannot be reached, this if else statement will throw an error 
            console.log(err);
        else {
          console.log('file ' + filename + ' text was displayed on server.')/// displays in console that the text from desired file was sent to server
          console.log(`Server is running on http://${host}:${port}`)
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);/// this serves as a buffer for the data sent from the file to server
          return res.end();
        }   
      });
    }).listen(3000);
  }