// Route Home

const express = require('express');
const router = express.Router();

router.get("/", (req, resp) => resp.status(200).send("API Homepage."));

module.exports = router;