// Route SMTP

const express = require('express');
const router = express.Router();

const {getSMTPData, getSMTPDataById} = require('../controllers/controllerGetSMTPData')
const {controllerSendEmail, controllerSendEmailHandler } = require('../controllers/controllerSendEmail')

// Get's
router.get("/", getSMTPData)
router.get("/:id", getSMTPDataById)

// // Post's
router.post("/", controllerSendEmailHandler)

// // Put's
// router.put("/:id", controllerRegFormData.updateUser)

// // Delete's 
// router.delete("/:id", controllerRegFormData.deleteUser)




module.exports = router;