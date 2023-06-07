const fs = require("fs");
const http = require("http");
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end()
      console.log(data);
    });
  })
  .listen(3000, console.log("Server running on port 3000"));


