const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const submitRoute = require('./submit');

const app = express();

app.use(cors({
  origin: 'https://portfolio-terraform-virid.vercel.app' // change if needed
}));
app.use(bodyParser.json());
app.use('/api', submitRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
