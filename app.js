const express = require('express');
const cors = require('cors');
const extractRoutes = require('./routes/extractRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/extract', extractRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
