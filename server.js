const server = require("http");

server.createServer((req, res) => {
  res.end("hello world from node js");
});

server.listen(3000);
