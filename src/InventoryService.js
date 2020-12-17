import axios from "axios";

const BASE_URL = "http://localhost:3005";

const getItems = () => {
  return axios.get(`${BASE_URL}/api/items`);
};

const getItem = (itemId) => {
  return axios.get(`${BASE_URL}/api/items/${itemId}`);
};

const createItem = (item) => {
  return axios.post(`${BASE_URL}/api/items`, item);
};

const replaceItem = (itemId, item) => {
  return axios.put(`${BASE_URL}/api/items/${itemId}`, item);
};

const updateItem = (itemId, item) => {
  return axios.patch(`${BASE_URL}/api/items/${itemId}`, item);
};

const deleteItem = (itemId) => {
  return axios.delete(`${BASE_URL}/api/items/${itemId}`);
};

export { getItem, getItems, createItem, replaceItem, updateItem, deleteItem };
