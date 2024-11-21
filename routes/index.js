// Index consolidate routes

const express = require('express')
const router = express.Router();

// Importing Routers
const routeHome = require('./routeHome')
const routeForm = require('./routeForm')
const routeRoles = require('./routeRoles')
const routeAdmin = require('./routeAdmin')

router.use("/", routeHome)
router.use("/form", routeForm)
router.use("/roles", routeRoles)
router.use("/admin", routeAdmin)

module.exports = router;