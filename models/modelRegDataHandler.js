const database = require('./connections')

// Import Queries
const { queryRegNewUser } = require("./queries/formRegData")

const regNewUser = async (userdata) => {
    const {username, birthdate,cpf, mother_name, phone, cep, email, id_role, id_department, user_example} = userdata

    const [result] = await database.execute(queryRegNewUser,
        [username, birthdate, cpf, mother_name, phone, cep, email, id_role, id_department, user_example])
        return result;
}

// Exports >>>
module.exports = regNewUser;