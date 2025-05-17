const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database connected:', result.rows[0]);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); 
  }
})();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
