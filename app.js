// App core File Configuration

const express = require('express')
const cors = require('cors');
const app = express();
const path = require('path')
const { startTask } = require('./scheduler/tasks')


// Start Tasks
startTask();

// TEMPORARY !! --- DANGER -- REMOVE IN PRODUCTION
app.use(cors(
    {
        origin: '*'
    }
));

// app.use(cors({
//     origin: 'http://seu-frontend.com',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//     allowedHeaders: ['Content-Type', 'Authorization'], 
// }));

// View Pages Routes / Form
app.use("/", express.static(path.join(__dirname, 'views', 'form')))

// View Pages Routes / Admin
app.use("/admin", express.static(path.join(__dirname, 'views', 'admin')))

// Enable Express to understand Json
app.use(express.json());

const routes = require('./routes')

app.use('/', routes)

module.exports = app;