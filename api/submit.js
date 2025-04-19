// api/submit.js

import { Pool } from 'pg';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  
  ssl: { rejectUnauthorized: false },  
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { suggestion } = req.body; 

    try {
      
      const result = await pool.query(
        'INSERT INTO suggestions (suggestion) VALUES ($1) RETURNING id',
        [suggestion]
      );

      
      res.status(200).json({
        success: true,
        message: 'Suggestion submitted successfully!',
        data: result.rows[0],  
      });
    } catch (error) {
      console.error('Error inserting suggestion:', error);

      res.status(500).json({ success: false, message: 'Error submitting suggestion.' });
    }
  } else {
   
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
