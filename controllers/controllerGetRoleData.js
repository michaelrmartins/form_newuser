// Controller file - Get Role Data

const roleHandler = require ('../models/modelLoadDataHandler')

const getRoles = async (req, resp) => {
   console.log("Controlle getRoles Executed....")
   roleData = await roleHandler.modelGetRolesData()
   return resp.status(200).send(roleData)

} // End getRoles

// Get Roles By ID
const getRolesById = async (req, resp) => {
   console.log("controller getRegistersById executed " + req.params.id)
   // Check id 
   if (isNaN(req.params.id)){return resp.status(400).json({"error": "Invalid ID", "message": "Id is not a number"})} 
   if (req.params.id <= 0 ){return resp.status(400).json({"error": "Invalid ID", "message":"ID 0 or Negative"})}

   // Main execute
   try {
      const regId = req.params.id;
      console.log(regId)
      const result = await roleHandler.modelGetRolesById(regId)
      return resp.status(200).json(result)
   } // End Try
   catch(error) {console.log(error)}
} // End getRegistersById

module.exports = {
getRoles,
getRolesById

}