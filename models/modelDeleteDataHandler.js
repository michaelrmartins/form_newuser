const database = require('./connections')
const { queryDeleteUser,
        queryDeleteRole,
        queryDeleteDepartments } = require('./queries/formDeleteData')

const modelDeleteUser = async (userId) => {
    const executeReturn = database.execute(queryDeleteUser, [userId])
    return executeReturn;
};

const modelDeleteRole = async (roleId) => {
    const executeReturn = database.execute(queryDeleteRole, [roleId])
    return executeReturn;
};

const modelDeleteDepartments = async (departmentId) => {
    const executeReturn = database.execute(queryDeleteDepartments, [departmentId])
    return executeReturn;
};

module.exports = {modelDeleteUser,
                  modelDeleteRole,
                  modelDeleteDepartments};