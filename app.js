// App core File Configuration

const express = require('express')
const cors = require('cors');
const app = express();

// const path = require('path');

// TEMPORARY !! --- DANGER -- REMOVE IN PRODUCTION
app.use(cors());


// app.use(cors({
//     origin: 'http://seu-frontend.com', // Origem permitida (por exemplo, o domínio do seu frontend)
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
// }));

// Enable Express to understand Json
app.use(express.json());

const routes = require('./routes')

app.use('/', routes)

module.exports = app;