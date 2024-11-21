// Route roles

const express = require('express');
const router = express.Router();

const controllerGetFormData = require('../controllers/controllerGetFormData')
// const controllerRegFormData = require('../controllers/controllerRegFormdata')

// router.get("/", (req, resp) => resp.status(200).send("Roles Page."));
router.get("/", controllerGetFormData.getRoles)

module.exports = router;