const database = require('./connections')


const { modelGetRegistersForm } = require("./queries/formLoadData")

// Load Form data
const getRegistersForm = async () => {
    const [rows] = await database.execute(modelGetRegistersForm)
    return rows;
}


module.exports = {
    getRegistersForm
}