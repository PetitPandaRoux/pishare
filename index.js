const express = require('express');
const app = express();
const port = 8000; 

app.get('/', function(request, response) {
  response.send('<h1>salut</h1>') ;
  console.log("from get" + this);
});

app.listen(port, () => {
  console.log('Epxress running on port 8000');
  console.log("from listening port this is" + this);
});