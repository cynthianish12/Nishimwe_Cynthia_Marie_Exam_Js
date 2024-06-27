// frontend_server/server.js
const express = require('express');
const path = require('path');
const cors= require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: '*', 
  methods: ['GET','POST','UPDATE','READ'],     
  allowedHeaders: ['Content-Type'] 
}));

// Default route
app.get("/", (req, res) => {
    res.redirect("src\components\Page.jsx");
  });
  
app.listen(PORT, () => {
    console.log(`Frontend server is running on port ${PORT}`);
});