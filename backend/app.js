require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const register= require("./routes/register");
const {sequelize } = require('./schema/pg'); 

const path = require("path");
const cors = require("cors");


const app = express();

// Middleware
app.use(bodyParser.json()); 

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST','DELETE'],     
  allowedHeaders: ['Content-Type'] 
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default-secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static("routes"));

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch((err) => console.error("Error connecting to PostgreSQL:", err));

// Routes with appropriate prefixes
app.use("/api", register);

// Start the server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});