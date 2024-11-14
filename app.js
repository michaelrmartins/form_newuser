// App core File Configuration

const express = require('express')
const app = express();

// const path = require('path');

// Enable Express to understand Json
app.use(express.json());

const routes = require('./routes')

app.use('/', routes)

module.exports = app;