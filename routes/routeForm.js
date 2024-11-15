// // Route Form

const express = require('express');
const router = express.Router();
const controllerGetFormData = require('../controllers/controllerGetFormData')
const controllerRegFormData = require('../controllers/controllerRegFormdata')

// Get's
router.get("/", controllerGetFormData.getRegisters)
router.get("/roles", controllerGetFormData.getRoles)

// Post's
router.post("/", controllerRegFormData)

module.exports = router;