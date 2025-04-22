const express = require('express');
const router = express.Router();
const db = require('../utils/db'); 

router.post('/', async (req, res) => {
    const { suggestion } = req.body;

    try {
        await db.query('INSERT INTO suggestions (suggestion_text) VALUES ($1)', [suggestion]);
        res.status(200).send({ message: 'Submitted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error submitting data' });
    }
});

module.exports = router;
