'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('./public'));
const PORT = process.env.PORT;

// app.get('/', (request, response) => {
//   response.send('<h1 onClick="window.location.reload();">Hello from the backside<h1>');
// })

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})
