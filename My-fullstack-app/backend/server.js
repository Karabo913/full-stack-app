
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors()); 
app.use(express.json());


mongoose.connect('mongodb://0.0.0.0:27017/employees', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
