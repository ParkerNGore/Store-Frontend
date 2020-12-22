import axios from "axios";

const BASE_URL = "http://localhost:3005";

const getUsers = () => {
  return axios.get(`${BASE_URL}/api/users`);
};

const getUser = (userId) => {
  return axios.get(`${BASE_URL}/api/users/${userId}`);
};

const createUser = (user) => {
  return axios.post(`${BASE_URL}/api/users`, user);
};

const replaceUser = (userId, user) => {
  return axios.put(`${BASE_URL}/api/users/${userId}`, user);
};

const updateUser = (userId, user) => {
  return axios.patch(`${BASE_URL}/api/users/${userId}`, user);
};

const deleteUser = (userId) => {
  return axios.delete(`${BASE_URL}/api/users/${userId}`);
};

const userLogin = (user) => {
  return axios.post(`${BASE_URL}/api/users/login`, user);
};

export {
  getUser,
  getUsers,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
  userLogin,
};
