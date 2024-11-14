// Controller File - getFormData

const formHandler = require('../models/modelLoadDataHandler')

const getRegisters = async (req, resp) => {
   console.log("controller executed..")
   formData = await formHandler.getRegistersForm()
   return resp.status(200).send(formData)
}

module.exports = getRegisters;