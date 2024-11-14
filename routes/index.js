// Index consolidate routes

const express = require('express')
const router = express.Router();

// Importing Routers
const routeHome = require('./routeHome')
const routeForm = require('./routeForm')
const routeAdmin = require('./routeAdmin')

router.use("/", routeHome)
router.use("/form", routeForm)
router.use("/admin", routeAdmin)

module.exports = router;