// Controller File - getFormData

const formHandler = require('../models/modelLoadDataHandler')

const getRegisters = async (req, resp) => {
   console.log("controller getRegisters executed..")
   formData = await formHandler.modelGetRegistersForm()
   return resp.status(200).send(formData)
} // End getRegisters

// Get Registers By ID
const getRegistersById = async (req, resp) => {
   console.log("controller getRegistersById executed " + req.params.id)
   // Check id 
   if (isNaN(req.params.id)){return resp.status(400).json({"error": "Invalid ID", "message": "Id is not a number"})} 
   if (req.params.id <= 0 ){return resp.status(400).json({"error": "Invalid ID", "message":"ID 0 or Negative"})}

   // Main execute
   try {
      const regId = req.params.id;
      console.log(regId)
      const result = await formHandler.modelGetRegistersById(regId)
      return resp.status(200).json(result)
   } // End Try
   catch(error) {console.log(error)}
} // End getRegistersById

// Get Registers By CPF
const getRegistersByCpf = async (req, resp) => {
   console.log("controller getRegistersByCpf executed " + req.params.cpf)
   // Check id 
   if (isNaN(req.params.cpf)){return resp.status(400).json({"error": "Invalid CPF", "message": "CPF is not a number"})} 
   if (req.params.cpf <= 0 ){return resp.status(400).json({"error": "Invalid CPF", "message":"CPF 0 or Negative"})}

   // Main execute
   try {
      const regCpf = req.params.cpf;
      console.log(regCpf)
      const result = await formHandler.modelGetRegistersByCpf(regCpf)
      return resp.status(200).json(result)
   } // End Try
   catch(error) {console.log(error)}
} // End getRegistersByCpf

const getRoles = async (req, resp) => {
   console.log("Controlle getRoles Executed....")
   roleData = await formHandler.modelGetRolesData()
   return resp.status(200).send(roleData)

} // End getRoles

const getDepartments = async (req, resp) => {
   console.log("Controlle getDepartments Executed....")
   departmentsData = await formHandler.modelGetDepartmentsData()
   return resp.status(200).send(departmentsData)

} 

module.exports = { 
   getRegisters,
   getRegistersById,
   getRegistersByCpf,
   getRoles,
   getDepartments
};