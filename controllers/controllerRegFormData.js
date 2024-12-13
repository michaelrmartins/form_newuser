// Controller File - regFormData

const formHandler = require('../models/modelRegDataHandler')
const CreateUpdateQuery = require('../models/modelDinamicCreateUpdateQuery')
const { modelUpdateUser } = require('../models/modelUpdateDataHandler')
const { modelDeleteUser } = require('../models/modelDeleteDataHandler')

// Register new user
const regUser = async (req, resp ) => {
  try{ 
   console.log(req.body)
   const { USERNAME, BIRTHDATE, CPF, MOTHER_NAME, PHONE, EMAIL, CEP, ID_ROLE, ID_DEPARTMENT, USER_EXAMPLE } = req.body;
   const result = await formHandler({
       username: USERNAME,
       birthdate: BIRTHDATE || null,
       cpf: CPF,  
       mother_name: MOTHER_NAME || null,
       phone: PHONE || null,
       email: EMAIL || null,
       cep: CEP || null,
       id_role: ID_ROLE,
       id_department: ID_DEPARTMENT,
       user_example: USER_EXAMPLE || null
   });
   return resp.status(201).json({message: `message:User Registred Successfully`, result})
} catch(error) {
   console.log("Controller - regUse error:", error, req.body);
   return resp.status(500).json({message: "Error Registring user", error})} 
};

// Update User
const updateUser = async (req, resp) =>{
  try {
      const userId = req.params.id
      const data = req.body
      const condition = {ID: userId}

      const { query, values } = CreateUpdateQuery('form_data', data, condition)
      result = await modelUpdateUser(query, values)
      console.log(result)
      return resp.status(200).send({message: "Sucess, updated"});
  } catch (error) {console.log(error); return resp.status(500).send({error: "Update Error"})}
};

// Update User by Cpf
const updateUserByCpf = async (req, resp) =>{
  try {
      const cpf = req.params.cpf
      const data = req.body
      const condition = {CPF: cpf}

      const { query, values } = CreateUpdateQuery('form_data', data, condition)
      
      console.log(query)
      result = await modelUpdateUser(query, values)
      console.log(result)
      return resp.status(200).send({message: "Sucess, updated"});

  } catch (error) {console.log(error); return resp.status(500).send({error: "Update Error"})} 
};

// Delete User
const deleteUser = async (req, resp) => {
  try {
    const userId = req.params.id
    console.log(userId)
    result = await modelDeleteUser(userId)
    return resp.status(200).send({message: "Sucess, removed!"})

  } catch (error) {console.log(error); return resp.status(500).send({error: "Delete Error"})}
}; // End deleteUser

// Exports
module.exports = { regUser, updateUser, deleteUser, updateUserByCpf };
