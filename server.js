const http = require("http");
const requestListener = (req, res) => {
  console.log(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === "/reverseString") {
    res.statusCode = 200;
    var name;
    req.on("data", (chunk) => (name = chunk.toString(`utf-8`)));
    req.on("end", () => {
      // here i moved the whole string stuff happening to a seperate function to the bottom so make it more readable 
      reversedName = reverseString(name)
      res.end(reversedName);
    });
    
  }
  
  

};
const host = "localhost";
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, () =>
  console.log(`hello there http://${host}:${port}`)
);


const reverseString = (name) => {
  let nameArray = name.split("");
  let reverseArray = nameArray.reverse();
  return reverseArray.join("");
}
