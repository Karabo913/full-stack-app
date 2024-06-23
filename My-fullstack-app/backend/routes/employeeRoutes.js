const express = require('express');
const Employee = require('./models/employee');
const router = express.Router();


router.get('/view', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:department', async (req, res) => {
  try {
    const employees = await Employee.find({ department: req.params.department });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/add', async (req, res) => {
  const employee = new Employee(req.body);
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete("/employees/delete/:id", async (req, res) => {
  let employeeID = req.params.id;
  
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(employeeID);
    if (deletedEmployee) {
      res.json({ message: "Employee deleted" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
