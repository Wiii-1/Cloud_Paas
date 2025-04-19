const express = require('express');
const cors = require('cors');
const { Client } = require('pg'); 

const app = express();


app.use(cors({
  origin: 'http://portfolio-terraform-omega.vercel.app/',  
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());


const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


client.connect().catch(err => console.error('Database connection error', err.stack));


app.post('/api/submit', async (req, res) => {
  const { suggestion } = req.body;

  if (!suggestion || suggestion.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Suggestion is required',
    });
  }

  try {
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
  }
});

// Listen on the correct port (from environment variable or fallback to 3000 for local)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
