const express = require('express');
const router = express.Router();

router.post('/submit', async (req, res) => {
  const { suggestion } = req.body;

  if (!suggestion || typeof suggestion !== 'string' || suggestion.trim() === '') {
    return res.status(400).send('Invalid suggestion.');
  }

  try {
    console.log('Received suggestion:', suggestion);
    res.status(200).send('Suggestion submitted successfully.');
  } catch (err) {
    console.error('Error processing suggestion:', err);
    res.status(500).send('Internal Server Error.');
  }
});

module.exports = router;
