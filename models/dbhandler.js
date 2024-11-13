const database = require('./connections')

const sql = 'SELECT * FROM sys.sys_config'

const simpleQuery = async () => {

    const[rows, fields] = await database.query('SELECT * FROM sys.sys_config')
    console.log(rows)
    console.log(fields)
    return rows;
} // End simpleQiery

console.log("opening... " + process.env.MYSQL_IPADDRESS)

simpleQuery();