const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("hello world from node js");
});

server.listen(3000);
