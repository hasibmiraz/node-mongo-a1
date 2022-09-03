// Dependencies
const express = require('express');

// Variables
const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());

// Listen to port
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
