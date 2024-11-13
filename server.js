// Server Config File

// Import and initialize Dotenv
const Dotenv = require('dotenv')
Dotenv.config()

// Start app instance
server = require('./app')

const server_address = process.env.SERVER_ADDRESS
const server_port = process.env.SERVER_PORT 

server.listen(server_port, () => console.log(`Server running on: http://${server_address}:${server_port}`))