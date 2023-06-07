const http = require("http");
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Nodejs");
    res.end();
  })
  .listen(3000);
