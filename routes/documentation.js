const express = require('express');
const router = express.Router();
const document = require('../docs/basicInfo');

router.get('/', async (req, res) => {
    try {
        res.json(document);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
})

module.exports = router