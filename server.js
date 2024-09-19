const express = require('express');
// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const cors = require('cors');


// Load environment variables
// dotenv.config();


// Connect to MongoDB
connectDB();   // Done

// Initialize express
const app = express(); // Done

app.use(cors({
  origin: 'https://test-eight-chi-71.vercel.app',  // Allow frontend on port 5173
}));

// Middleware to parse incoming JSON data
app.use(express.json());

// Routes
app.use('/api/users', userRoutes); //done


const path = require("path")


// Set the port
const PORT = process.env.PORT || 5000;



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
