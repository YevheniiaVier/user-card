import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63ea2fca811db3d7ef08adf5.mockapi.io/users',
});

export const getUsers = async () => {
  const { data } = await instance.get(`/`);
  return data;
};
