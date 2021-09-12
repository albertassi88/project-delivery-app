const rescue = require('express-rescue');
const UserService = require('../services/user');

const create = rescue(async (req, res) => {
  const result = await UserService.create(req.body);
  res.status(201).json(result);
});

const adminCreate = rescue(async (req, res) => {
  const result = await UserService.adminCreate(req.body);
  res.status(201).json(result);
});

const getAllSellers = rescue(async (_req, res) => {
  const result = await UserService.getAllSellers();
  res.status(200).json(result);
});

const getAllUsers = rescue(async (req, res) => {
  const result = await UserService.getAllUsers();
  res.status(200).json(result);
});

const deleteUser = rescue(async (req, res) => {
  const result = await UserService.deleteUser(req.body);
  res.status(204).json(result);
});

module.exports = {
  create,
  adminCreate,
  getAllSellers,
  getAllUsers,
  deleteUser,
};
