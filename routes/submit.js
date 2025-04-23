const express = require('express');
const db = require('../utils/db'); 
const router = express.Router();

router.post('/', async (req, res) => {
  console.log('Request received at /api/submit');
  
  const { suggestion } = req.body;

  
  if (!suggestion) {
    console.log('Suggestion is missing');
    return res.status(400).send('Suggestion is required');
  }

  console.log('Suggestion received:', suggestion);

  try {
    
    await db.query('INSERT INTO suggestions (content) VALUES ($1)', [suggestion]);
    console.log('Suggestion inserted successfully');
    res.status(200).send('Thank you for your suggestion!');
  } catch (error) {
    console.error('Error inserting suggestion:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
