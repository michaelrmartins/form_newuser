const { sendEmail, serviceSendEmailHandler } = require('../services/serviceSendEmail')

 const controllerSendEmail = () => {
    returnData = sendEmail("michaelmartins.js@hotmail.com", "", "this is an Email Test!")
    return returnData;
 }

 const controllerSendEmailHandler = async (req, resp) => {
   console.log(req.body)
   const {smtpConfigId, email, var1, var2, var3, var4} = req.body;
   const result = await serviceSendEmailHandler({
      smtpConfigId: smtpConfigId,
      email: email,
      var1: var1 || null,
      var2: var2 || null,
      var3: var3 || null,
      var4: var4 || null
   });
   console.log(result)
   return resp.status(200).send(result)
 }

 module.exports = {
    controllerSendEmail,
    controllerSendEmailHandler
 }