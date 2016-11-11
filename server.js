var express = require("express");
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.get('/api/whoami/', function(req, res) {
    console.log(req.headers["accept-language"]);
    
    console.log(req.headers['user-agent']);
  var param = req.ip;
   res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end(param);
  });
 
app.listen(port, function() {
  console.log('Server is listening on port ' + port);
});

