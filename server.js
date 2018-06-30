const express = require('express');
const app = express();
const port = process.env.PORT || '8080';
var tCount = 1;

app.listen(port, () => {
  console.log("Quinela Server Express listening on " + port);
});

app.get('/', (req, res) => {
  console.log("["+ (tCount++) +"] : GET" );
});
