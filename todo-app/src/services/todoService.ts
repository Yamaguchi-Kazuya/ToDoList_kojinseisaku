import axios from 'axios';

const API_URL = 'http://localhost:3001/api/todos';

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (text: string) => {
  const response = await axios.post(API_URL, { text });
  return response.data;
};

export const updateTodo = async (id: number, data: { text?: string; completed?: boolean }) => {
  const response = await axios.put(`<span class="math-inline">\{API\_URL\}/</span>{id}`, data);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`<span class="math-inline">\{API\_URL\}/</span>{id}`);
  return response.data;
};