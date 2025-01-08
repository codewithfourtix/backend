const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("hello world from node js");
  if (req.url == "/about") {
    res.end("This is the about page");
  }
  if (req.url == "/contact") {
    res.end("This is the contact page");
  }
});

server.listen(3000);
