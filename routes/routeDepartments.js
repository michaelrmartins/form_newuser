// Route Departmentes

const express = require('express');
const router = express.Router();

const controllerGetFormData = require('../controllers/controllerGetDepartmentsData')
const {regDepartment, updateDepartment, deleteDepartment} = require('../controllers/controllerRegDepartmentsData')

// Get's
router.get("/", controllerGetFormData.getDepartments)
router.get("/:id", controllerGetFormData.getDepartmentsById)

// Post's
router.post("/", regDepartment)

// Put's
router.put("/:id", updateDepartment)

//Delete's
router.delete("/:id", deleteDepartment)

// Export
module.exports = router;