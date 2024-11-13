// Index consolidate routes

const express = require('express')
const router = express.Router();

// Importing Routers
const routeHome = require('./route-home')
const routeForm = require('./route-form')
const routeAdmin = require('./route-admin')

router.use("/", routeHome)
router.use("/form", routeForm)
router.use("/admin", routeAdmin)

module.exports = router;