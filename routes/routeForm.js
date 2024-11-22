// // Route Form

const express = require('express');
const router = express.Router();
const controllerGetFormData = require('../controllers/controllerGetFormData')
const controllerRegFormData = require('../controllers/controllerRegFormdata')

// Get's
router.get("/", controllerGetFormData.getRegisters)
router.get("/:id", controllerGetFormData.getRegistersById)

// Post's
router.post("/", controllerRegFormData.regUser)

// Put's
router.put("/:id", controllerRegFormData.updateUser)

// Delete's 
router.delete("/:id", controllerRegFormData.deleteUser)

// Export
module.exports = router;