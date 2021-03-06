import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

export const register = async (name, email, password) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL_BASE}/user`,
    data: { name, email, password },
  });

  return data;
};

export const login = async (email, password) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL_BASE}/login`,
    data: { email, password },
  });

  return data;
};

export const submitOrder = async (orderData, token) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL_BASE}/sales`,
    data: orderData,
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const getProducts = async () => {
  const { data } = await axios.get(`${URL_BASE}/products`);
  return data;
};

export const getSellers = async () => {
  const { data } = await axios.get(`${URL_BASE}/user/sellers`);
  return data;
};

export const getOrderById = async (id) => {
  const { data } = await axios.get(`${URL_BASE}/sales/${id}`);
  return data;
};

export const getOrders = async () => {
  const { data } = await axios.get(`${URL_BASE}/sales`);
  return data;
};

export const getUsers = async (token) => {
  const { data } = await axios({
    method: 'get',
    url: `${URL_BASE}/user`,
    headers: {
      authorization: token,
    },
  });
  return data;
};

export const newUser = async ({ name, email, password, role, token }) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL_BASE}/user/admin`,
    data: { name, email, password, role },
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const deleteUser = async ({ id, token }) => {
  const { data } = await axios({
    method: 'delete',
    url: `${URL_BASE}/user`,
    data: { id },
    headers: {
      authorization: token,
    },
  });

  return data;
};
