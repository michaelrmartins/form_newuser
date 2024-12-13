const database = require('./connections')

// Import Queries
const { queryRegNewUser, queryRegNewRole } = require("./queries/formRegData")

const regNewUser = async (userdata) => {
    const {username, birthdate,cpf, mother_name, phone, cep, email, id_role, id_department, user_example} = userdata

    const [result] = await database.execute(queryRegNewUser,
        [username, birthdate, cpf, mother_name, phone, cep, email, id_role, id_department, user_example])
        return result;
}

// Reg New Role
const regNewRole = async (userdata) => {
    const {role_name, role_description,licence_type, licence_description} = userdata

    const [result] = await database.execute(queryRegNewRole,
        [role_name, role_description,licence_type, licence_description])
        return result;
}

// Exports >>>
module.exports = { regNewUser, regNewRole } 