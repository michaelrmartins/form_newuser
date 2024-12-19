// Controller file - regRoleData

const CreateUpdateQuery = require('../models/modelDinamicCreateUpdateQuery')
const { regNewRole } = require ('../models/modelRegDataHandler')
const { modelUpdateUser } = require('../models/modelUpdateDataHandler')
const { modelDeleteRole } = require ('../models/modelDeleteDataHandler')

// Register new role
const regRole = async (req, resp ) => {
  try{ 
   console.log(req.body)
   const { ROLE_NAME, ROLE_DESCRIPTION, LICENCE_TYPE, LICENCE_DESCRIPTION } = req.body;
   const result = await regNewRole({
       role_name: ROLE_NAME || null,
       role_description: ROLE_DESCRIPTION || null,
       licence_type: LICENCE_TYPE || null,  
       licence_description: LICENCE_DESCRIPTION  || null,
   });
   return resp.status(201).json({message: `message:Role Registred Successfully`, result})
} catch(error) {
   console.log("Controller - regUse error:", error, req.body);
   return resp.status(500).json({message: "Error Registring user", error})} 
};

// Update Role
const updateRole = async (req, resp) =>{
   try {
       const roleId = req.params.id
       const data = req.body
       const condition = {ID: roleId}
 
       const { query, values } = CreateUpdateQuery('form_roles', data, condition)
       result = await modelUpdateUser(query, values)
       console.log(result)
       return resp.status(200).send({message: "Sucess, updated"});
   } catch (error) {console.log(error); return resp.status(500).send({error: "Update Error"})}
 };

// Delete Role
const deleteRole = async (req, resp) => {
   try {
     const roleId = req.params.id
     console.log(roleId)
     result = await modelDeleteRole(roleId)
     return resp.status(200).send({message: "Sucess, removed!"})
 
   } catch (error) {console.log(error); return resp.status(500).send({error: "Delete Error"})}
 }; // End deleteRole

module.exports = { regRole, updateRole, deleteRole }