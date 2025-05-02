import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import { connectDatabase } from './config/database'; // データベース接続関数（後述）

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORSミドルウェアの設定（必要に応じて調整）
app.use(cors());

// JSONリクエストボディの解析
app.use(express.json());

// Todo関連のルーティング
app.use('/api/todos', todoRoutes);

// デフォルトルート
app.get('/', (req: Request, res: Response) => {
  res.send('Todo API is running!');
});

// エラーハンドリングミドルウェア（簡単な例）
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });