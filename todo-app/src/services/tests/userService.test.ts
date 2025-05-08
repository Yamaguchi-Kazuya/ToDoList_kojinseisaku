import { getUser } from '../userService';
import axios from 'axios'; // 必要に応じて

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('userService', () => {
  // ... テストの実装 ...
});