// Controller file - regRoleData

const { regNewRole } = require ('../models/modelRegDataHandler')

// Register new user
const regRole = async (req, resp ) => {
  try{ 
   console.log(req.body)
   const { ROLE_NAME, ROLE_DESCRIPTION, LICENCE_TYPE, LICENCE_DESCRIPTION } = req.body;
   const result = await regNewRole({
       role_name: ROLE_NAME,
       role_description: ROLE_DESCRIPTION || null,
       licence_type: LICENCE_TYPE || null,  
       licence_description: LICENCE_DESCRIPTION  || null,
   });
   return resp.status(201).json({message: `message:Role Registred Successfully`, result})
} catch(error) {
   console.log("Controller - regUse error:", error, req.body);
   return resp.status(500).json({message: "Error Registring user", error})} 
};

module.exports = { regRole }