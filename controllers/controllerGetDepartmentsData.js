// Controller file - Get Departments Data

const departmentsHandler = require ('../models/modelLoadDataHandler')

const getDepartments = async (req, resp) => {
    console.log("Controlle getDepartments Executed....")
    departmentsData = await departmentsHandler.modelGetDepartmentsData()
    return resp.status(200).send(departmentsData)
 } 

// Get Departments By ID
const getDepartmentsById = async (req, resp) => {
   console.log("controller getRegistersById executed " + req.params.id)
   // Check id 
   if (isNaN(req.params.id)){return resp.status(400).json({"error": "Invalid ID", "message": "Id is not a number"})} 
   if (req.params.id <= 0 ){return resp.status(400).json({"error": "Invalid ID", "message":"ID 0 or Negative"})}

   // Main execute
   try {
      const regId = req.params.id;
      console.log(regId)
      const result = await departmentsHandler.modelGetDepartmentsById(regId)
      return resp.status(200).json(result)
   } // End Try
   catch(error) {console.log(error)}
} // End getRegistersById

 module.exports = {
    getDepartments,
    getDepartmentsById
}