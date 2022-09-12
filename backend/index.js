require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { pacientRoutes, paymentRoutes } = require('./routes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/pacients', pacientRoutes);
app.use('/payments', paymentRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

