// Model Load Data

const database = require('./connections')

// Load Queries
const { queryGetRegistersForm, queryGetRegistersById, queryGetRolesValuesActive } = require("./queries/formLoadData")

// Load Form data
const modelGetRegistersForm = async () => {
    const [rows] = await database.execute(queryGetRegistersForm)
    return rows;
}

// Load Register by ID
const modelGetRegistersById = async (regId) => {
    const id = regId
    const [rows] = await database.execute(queryGetRegistersById, [id])
    return rows;
}

// Load Roles data
const modelGetRolesData = async () => {
    const [rows] = await database.execute(queryGetRolesValuesActive)
    return rows;

} // End

module.exports = {
    modelGetRegistersForm,
    modelGetRegistersById,
    modelGetRolesData
}