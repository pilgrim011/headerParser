var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.get('/api/whoami/', function(req, res) {
   
  var ip = req.headers["x-forwarded-for"];
 var lang = req.headers["accept-language"].slice(0,2);
 
 var os = req.headers["user-agent"].match(/\(([^)]+)\)/)[1];
   res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end(JSON.stringify({"ipaddress": ip, "language": lang, "software": os}));
  });
 
app.listen(port, function() {
  console.log('Server is listening on port ' + port);
});

