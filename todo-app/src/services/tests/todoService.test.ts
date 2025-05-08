import { getTodos, addTodo, updateTodo, deleteTodo } from '../todoService';
import axios from 'axios'; // 必要に応じて

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('todoService', () => {
  // ... テストの実装 ...
});