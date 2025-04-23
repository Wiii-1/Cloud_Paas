const { Pool } = require('pg');


const pool = new Pool({
  connectionString: 'postgres://Suggestions_owner:npg_E9pAC0eOwSKP@ep-rapid-smoke-a1vwvg99-pooler.ap-southeast-1.aws.neon.tech:5432/Suggestions?sslmode=require',
});


(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database connected:', result.rows[0]);
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();


module.exports = {
  query: (text, params) => pool.query(text, params),
};