// Controller file - regDepartmentsData

const CreateUpdateQuery = require('../models/modelDinamicCreateUpdateQuery')
const { regNewDepartment } = require ('../models/modelRegDataHandler')
const { modelUpdateUser } = require('../models/modelUpdateDataHandler')
const { modelDeleteDepartments } = require ('../models/modelDeleteDataHandler')

// Register new role
const regDepartment = async (req, resp ) => {
  try{ 
   console.log(req.body)
   const { NAME, DESCRIPTION, TYPE } = req.body;
   const result = await regNewDepartment({
       name: NAME,
       description: DESCRIPTION || null,
       type: TYPE || null,  
   });
   return resp.status(201).json({message: `message:Departments Registred Successfully`, result})
} catch(error) {
   console.log("Controller - regUse error:", error, req.body);
   return resp.status(500).json({message: "Error Registring Department", error})} 
};

// Update Role
const updateDepartment = async (req, resp) =>{
   try {
       const departmentId = req.params.id
       const data = req.body
       const condition = {ID: departmentId}
       const { query, values } = CreateUpdateQuery('form_departments', data, condition)
       result = await modelUpdateUser(query, values)
       console.log(result)
       return resp.status(200).send({message: "Sucess, updated"});
   } catch (error) {console.log(error); return resp.status(500).send({error: "Update Error"})}
 };

// Delete Department
const deleteDepartment = async (req, resp) => {
   try {
     const departmentId = req.params.id
     console.log(departmentId)
     result = await modelDeleteDepartments(departmentId)
     return resp.status(200).send({message: "Sucess, removed!"})
 
   } catch (error) {console.log(error); return resp.status(500).send({error: "Delete Error"})}
 }; // End deleteDepartment

module.exports = { regDepartment, updateDepartment, deleteDepartment }