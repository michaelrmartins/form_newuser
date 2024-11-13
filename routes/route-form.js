// Route Home

const express = require('express');
const router = express.Router();

router.get("/", (req, resp) => resp.status(200).send("Form page."));

module.exports = router;