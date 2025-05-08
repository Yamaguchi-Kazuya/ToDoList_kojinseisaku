import axios from 'axios';

const API_URL = 'http://localhost:3001/api/users'; // 例

export const getUser = async (id: number) => {
  const response = await axios.get(`<span class="math-inline">\{API\_URL\}/</span>{id}`);
  return response.data;
};