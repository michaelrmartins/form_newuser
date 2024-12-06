// Index consolidate routes

const express = require('express')
const router = express.Router();
const path = require('path')


// Importing Routers
const routeHome = require('./routeHome')
const routeForm = require('./routeForm')
const routeRoles = require('./routeRoles')
const routeDepartments = require('./routeDepartments')
const routeSMTP = require('./routeSMTP')
const routeAdmin = require('./routeAdmin')

// API Routes
router.use("/api", routeHome)
router.use("/api/form", routeForm)
router.use("/api/roles", routeRoles)
router.use("/api/departments", routeDepartments)
router.use("/api/smtp", routeSMTP)
router.use("/api/admin", routeAdmin)

module.exports = router;