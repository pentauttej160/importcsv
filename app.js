const express = require('express');
const path = require('path');

const app = express();
global.app = app;
global.__basedir = __dirname;

require('./imports/index');

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
