// pages/api/submit.js
import { Client } from 'pg';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    try {
      await client.connect();
      const { suggestion } = req.body;

      if (!suggestion || suggestion.trim() === '') {
        return res.status(400).json({
          success: false,
          message: 'Suggestion is required',
        });
      }

      const result = await client.query(
        'INSERT INTO suggestions(suggestion) VALUES($1) RETURNING *',
        [suggestion]
      );

      res.status(200).json({
        success: true,
        message: 'Suggestion received!',
        data: result.rows[0],
      });
    } catch (error) {
      console.error('Error inserting suggestion:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    } finally {
      await client.end();
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }
}
