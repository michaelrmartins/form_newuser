// Controller File - getFormData

const formHandler = require('../models/modelLoadDataHandler')

const getRegisters = async (req, resp) => {
   console.log("controller getRegisters executed..")
   formData = await formHandler.modelGetRegistersForm()
   return resp.status(200).send(formData)
} // End getRegisters

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

const getRoles = async (req, resp) => {
   console.log("Controlle getRoles Executed....")
   roleData = await formHandler.modelGetRolesData()
   return resp.status(200).send(roleData)

} // End getRoles

module.exports = { 
   getRegisters,
   getRegistersById,
   getRoles
};