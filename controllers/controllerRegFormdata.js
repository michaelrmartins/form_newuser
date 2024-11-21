// Controller File - regFormData

const formHandler = require('../models/modelRegDataHandler')
const CreateUpdateQuery = require('../models/modelDinamicCreateUpdateQuery')

// Register new user
const regUser = async (req, resp ) => {
  try{ 
   // console.log("let's try execute this... ")
   // if (req.body.ID_ROLE == 7){
   //    console.log("Valor enviado foi 7")
   // }
   console.log(req.body)
   const { USERNAME, BIRTHDATE, CPF, PHONE, CEP, ID_ROLE, USER_EXAMPLE } = req.body;
   const result = await formHandler({
       username: USERNAME,
       birthdate: BIRTHDATE,
       cpf: CPF,   
       phone: PHONE,
       cep: CEP,
       id_role: ID_ROLE,
       user_example: USER_EXAMPLE
   });
   return resp.status(201).json({message: `message:User Registred Successfully`, result})
} catch(error) {
   //console.log(result)
   console.log("Controller - regUse error:", error);
   return resp.status(500).json({message: "Error Registring user", error})
} // try finally


}; // End regUser

// Update User
const updateUser = async (req, resp) =>{
  try {
      const userId = req.params.id
      const data = req.body
      const condition = {ID: userId}

      const { query, values } = CreateUpdateQuery('form_data', data, condition)

      console.log(query)
      await database.execute(query, values )
      return res.status(200).send({message: "Sucess, updated"});
  } // End Try
  catch (error) {console.log(error); return resp.status(500).send({error: "Update Error"})}

}; // End updateUser

// Exports
module.exports = { regUser, updateUser };
