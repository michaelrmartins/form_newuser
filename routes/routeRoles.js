// Route roles

const express = require('express');
const router = express.Router();

const controllerGetFormData = require('../controllers/controllerGetFormData')
router.get("/", controllerGetFormData.getRoles)

module.exports = router;