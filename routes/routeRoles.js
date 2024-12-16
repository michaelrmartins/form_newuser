// Route roles

const express = require('express');
const router = express.Router();

const controllerGetRoleData = require('../controllers/controllerGetRoleData')
const { regRole, updateRole, deleteRole } = require('../controllers/controllerRegRoleData')

// Get's
router.get("/", controllerGetRoleData.getRoles)
router.get("/:id", controllerGetRoleData.getRolesById)

// Post's
router.post("/", regRole)

// Put's
router.put("/:id", updateRole)

//Delete's
router.delete("/:id", deleteRole)

module.exports = router;