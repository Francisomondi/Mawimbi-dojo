const http = require("http")

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader("content-type", "text/html")
    res.write("<html>")
    res.write("<head><title>this is my heading</title></head>")
    res.write("<body><form><input type='text'><button type='submit'>submit</button></form></body>")
    res.write("</html>")
    return res.end()


  }
  if (url === "/messages" && method === "POST") {
    res.setHeader("content-type", "text/html")
    res.write("<html>")
    res.write("<head><title>secong heading</title></head>")
    res.write("<body><h1>this is the main body</h1></body>")
    res.write("</html>")
    return res.end()

  }

});

server.listen(3000)