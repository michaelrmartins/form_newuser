// Controller File - Get SMTP Data

const formHandler = require('../models/modelLoadDataHandler')

const getSMTPData = async(req, resp) => {
    smtpData = await formHandler.modelGetSMTPData()
    return resp.status(200).send(smtpData)

}

const getSMTPDataById = async(req, resp) => {
    console.log("controller getSMTPDataById executed " + req.params.id)
    // Check id 
    if (isNaN(req.params.id)){return resp.status(400).json({"error": "Invalid ID", "message": "Id is not a number"})} 
    if (req.params.id <= 0 ){return resp.status(400).json({"error": "Invalid ID", "message":"ID 0 or Negative"})}
 
    // Main execute
    try {
       const regId = req.params.id;
       console.log(regId)
       const result = await formHandler.modelGetSMTPDataById(regId)
       return resp.status(200).json(result)
    } // End Try
    catch(error) {console.log(error)}
 } // End getRegistersById

module.exports = {getSMTPData,
                  getSMTPDataById
}