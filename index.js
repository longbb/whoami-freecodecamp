var express = require("express");
var app = express();

app.get("/whoami", function(req, res){
  var ip = req.headers["x-forwarded-for"] || 
  req.connection.remoteAddress || 
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress;
  var info = {
  "ipaddress": ip,
  "language": req.headers["accept-language"].split(",")[0],
  "software": req.headers["user-agent"].split(") ")[0].split(" (")[1]
  };
  res.json(info);
  console.log(req.headers);
});

var port = process.env.PORT || 5000

app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});
