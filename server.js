const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
var tCount = 1;

app.set('port', port);

app.listen(app.port, () => {
  console.log("Quinela Server Express listening on " + port);
});

app.get('/', (req, res) => {
  console.log("["+ (tCount++) +"] : GET" );
});
