// Controller File - regFormData

const formHandler = require('../models/modelRegDataHandler')

const regUser = async (req, resp ) => {
   console.log("I am a Controller...")

  try{ 
   console.log("let's try execute this... ")
   if (req.body.ID_ROLE == 7){
      console.log("Valor enviado foi 7")
   }

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


}; // end regUser


// Exports
module.exports = regUser;
