var express = require('express');
var app = express();


var port = Number(process.env.PORT || 3000);

app.listen(port, function () {
  console.log('Listening on ' + port);
});

app.use(express.static(__dirname + '/Public'));
