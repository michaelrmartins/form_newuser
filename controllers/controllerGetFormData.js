// Controller File - getFormData

const formHandler = require('../models/modelLoadDataHandler')

const getRegisters = async (req, resp) => {
   console.log("controller getRegisters executed..")
   formData = await formHandler.modelGetRegistersForm()
   return resp.status(200).send(formData)
}

const getRegistersById = async (req, resp) => {
   console.log("chegou no controller " + req.params.id)
   try {
      const regId = req.params.id;
      console.log(regId)
      const result = await formHandler.modelGetRegistersById(regId)
      return resp.status(200).json(result)
   } // End Try
   catch(error) {console.log(error)}

}

const getRoles = async (req, resp) => {
   console.log("Controlle getRoles Executed...")
   roleData = await formHandler.modelGetRolesData()
   return resp.status(200).send(roleData)

} // End getRoles

module.exports = { 
   getRegisters,
   getRegistersById,
   getRoles
};