// Route Departmentes

const express = require('express');
const router = express.Router();

const controllerGetFormData = require('../controllers/controllerGetDepartmentsData')

// Get's
router.get("/", controllerGetFormData.getDepartments)
router.get("/:id", controllerGetFormData.getDepartmentsById)

// Post's


// Put's


//Delete's


// Export
module.exports = router;