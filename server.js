require('dotenv').config();
const express = require('express');
const cors = require('cors');
const submitRoute = require('./routes/submit'); 

const app = express();

app.use(cors({
  origin: 'https://portfolio-terraform-lake.vercel.app'
}));

app.use(express.json()); 

app.use('/api/submit', submitRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
