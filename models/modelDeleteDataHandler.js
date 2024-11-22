const database = require('./connections')
const { queryDeleteUser } = require('./queries/formDeleteData')

const modelDeleteUser = async (userId) => {
    const executeReturn = database.execute(queryDeleteUser, [userId])
    return executeReturn;
};

module.exports = {modelDeleteUser}