// Route Departmentes

const express = require('express');
const router = express.Router();

const controllerGetFormData = require('../controllers/controllerGetFormData')
// const controllerRegFormData = require('../controllers/controllerRegFormdata')

// router.get("/", (req, resp) => resp.status(200).send("Roles Page."));
router.get("/", controllerGetFormData.getDepartments)

module.exports = router;