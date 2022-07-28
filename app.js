const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>First NodeJS Server</title></head>");
  res.write("<body>NodeJS Server is running.....</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, console.log("Server is running at localhost:3000"));
