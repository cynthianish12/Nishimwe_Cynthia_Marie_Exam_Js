const express = require('express');
const { Register } = require('../schema');
const router = express.Router();


// API endpoint to add a detail
router.post("/records", async (req, res) => {
  try {
    const { title, fname,sname,position, company,arena,employees,street, info,code,place,country,number,email} = req.body;
    const userId = req.userId; 
    const record = new Register({
     title:title,
     fname:fname,
     sname:sname,
     position:position,
     company:company,
     arena:arena,
     employees:employees,
     info:info,
     code:code,
     street:street,
     place:place,
     country:country,
     number:number,
     email:email
    });
    await record.save();
    res.status(201).send(record);
  } catch (error) {
    console.error("Error adding detail:", error);
    res.status(400).send(error);
  }
});


// delete 
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const record = await Register.findById(id);
    if (!record) {
      return res.status(404).json({ error: "Detail not found" });
    }
    await Register.deleteOne(record);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  all details
router.get("/details", async (req, res) => {
  try {
    const records = await Register.find();
    res.send(records);
  } catch (error) {
    res.status(500).send(error);
  }
 });
 

module.exports = router;