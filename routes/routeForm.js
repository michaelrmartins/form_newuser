// // Route Form

const express = require('express');
const router = express.Router();
const controllerGetFormData = require('../controllers/controllerGetFormData')
const controllerRegFormData = require('../controllers/controllerRegFormData')

// Get's
router.get("/", controllerGetFormData.getRegisters)
router.get("/:id", controllerGetFormData.getRegistersById)
router.get("/cpf/:cpf", controllerGetFormData.getRegistersByCpf)

// Post's
router.post("/", controllerRegFormData.regUser)

// Put's
router.put("/:id", controllerRegFormData.updateUser)
router.put("/cpf/:cpf", controllerRegFormData.updateUserByCpf)

// Delete's 
router.delete("/:id", controllerRegFormData.deleteUser)

// Export
module.exports = router;