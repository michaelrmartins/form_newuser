const database = require('./connections')

// Import Queries
const { queryRegNewUser } = require("./queries/formRegData")

const regNewUser = async (userdata) => {
    const {username, birthdate, cpf, phone, cep, id_role, user_example} = userdata

    const [result] = await database.execute(queryRegNewUser,
        [username, birthdate, cpf, phone, cep, id_role, user_example])
        return result;
}

// Exports >>>
module.exports = regNewUser;