const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080, () => console.log('Build running at localhost:8080'));
