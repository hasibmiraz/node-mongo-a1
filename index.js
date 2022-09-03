// Dependencies
const express = require('express');

// Local Modules
const userRouter = require('./routes/userRoutes');

// Variables
const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use('/user', userRouter);

// Listen to port
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
