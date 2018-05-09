// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get('/', (req, res) => res.redirect('/api/whoami'))
app.set('trust proxy', true)
app.get("/api/whoami", (req, res) => {
  let ipaddress = req.ip;
  let language = req.header("Accept-Language").split(",")[0]
  let software = req.header("User-Agent").split("(")[1].split(")")[0]
  let result = {
    ipaddress,
    language,
    software
  }
  res.json(result)
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
