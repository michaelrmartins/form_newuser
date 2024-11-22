const database = require('./connections')

const modelUpdateUser = async (query, values) => {
    const executeReturn = await database.execute(query, values)
    return (executeReturn)
} ;

module.exports = {modelUpdateUser}