// Controller File - getFormData

const formHandler = require('../models/modelLoadDataHandler')

const getRegisters = async (req, resp) => {
   console.log("controller executed..")
   formData = await formHandler.getRegistersForm()
   return resp.status(200).send(formData)
}

const getRoles = async (req, resp) => {
   console.log("Controlle getRoles Executed...")
   roleData = await formHandler.getRolesData()
   return resp.status(200).send(roleData)

} // End getRoles


module.exports = { 
   getRegisters,
   getRoles
};