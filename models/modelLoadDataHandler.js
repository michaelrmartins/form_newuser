// Model Load Data

const database = require('./connections')

// Load Queries
const { queryGetRegistersForm, queryGetRegistersById, queryGetRegistersByCpf, queryGetRolesValuesActive, queryGetDepartments } = require("./queries/formLoadData")
const { querySMTPGetData, querySMTPGetDataById } = require('./queries/SMTPLoadData')

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

// Load Register by CPF
const modelGetRegistersByCpf = async (regCpf) => {
    const cpf = regCpf
    const [rows] = await database.execute(queryGetRegistersByCpf, [cpf])
    return rows;
}

// Load Roles data
const modelGetRolesData = async () => {
    const [rows] = await database.execute(queryGetRolesValuesActive)
    return rows;
} // End

// Load Departments data
const modelGetDepartmentsData = async () => {
    const [rows] = await database.execute(queryGetDepartments)
    return rows;
} // End


// Load SMTP data 
const modelGetSMTPData = async () => {
    const [rows] = await database.execute(querySMTPGetData)
    return rows;
}

// Load SMTP data By ID
const modelGetSMTPDataById = async (regId) => {
    const id = regId
    const [rows] = await database.execute(querySMTPGetDataById, [id])
    return rows;
}

module.exports = {
    modelGetRegistersForm,
    modelGetRegistersById,
    modelGetRegistersByCpf,
    modelGetRolesData,
    modelGetDepartmentsData,
    modelGetSMTPData,
    modelGetSMTPDataById
}