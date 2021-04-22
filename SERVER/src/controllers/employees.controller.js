const emploteeCtrl = {};
const Employee = require("../models/employee");

emploteeCtrl.getEmployees = async (req, res) => {
  const employes = await Employee.find();
  res.json(employes);
};

emploteeCtrl.createEmployees = async (req, res) => {
  const Emplo = new Employee(req.body);
  await Emplo.save();

  res.json({ Message: "Employee created" });
};

emploteeCtrl.getEmployee = async (req, res) => {
  const employee = await Employee.findOne({ _id: req.params.id });
  res.json(employee);
};

emploteeCtrl.editEmployee = async (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: "Update employe" });
};

emploteeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ status: "Delete employe" });
};

module.exports = emploteeCtrl;
