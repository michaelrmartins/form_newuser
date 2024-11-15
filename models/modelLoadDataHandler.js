const database = require('./connections')

// Load Queries
const { modelGetRegistersForm, modelGetRolesValuesActive } = require("./queries/formLoadData")

// Load Form data
const getRegistersForm = async () => {
    const [rows] = await database.execute(modelGetRegistersForm)
    return rows;
}

// Load Roles data
const getRolesData = async () => {
    const [rows] = await database.execute(modelGetRolesValuesActive)
    return rows;

} // End

module.exports = {
    getRegistersForm,
    getRolesData
}