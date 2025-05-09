require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const submitRoute = require('./routes/submit');

const app = express();

console.log('Starting server...');
console.log(`Database URL: ${process.env.DATABASE_URL}`);

app.use(express.json()); 

app.use(cors({
  origin: 'https://portfolio-terraform-omega.vercel.app', 
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/submit', submitRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
