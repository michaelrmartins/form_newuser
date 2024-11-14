// // Route Form

const express = require('express');
const router = express.Router();
const controllerGetFormData = require('../controllers/controllerGetFormData')
const controllerRegFormData = require('../controllers/controllerRegFormdata')

router.get("/", controllerGetFormData)
router.post("/", controllerRegFormData)
module.exports = router;