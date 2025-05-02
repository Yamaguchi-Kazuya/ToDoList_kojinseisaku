//Expressのインポート
import express from 'express';
//APIリクエストに対する処理ロジックのコントローラー関数
import {
    //すべてのtodoアイテムを取得
  getAllTodos,
    //todoアイテムの追加
  addTodo,
    //todoアイテムの更新
  updateTodo,
    //todoアイテムの削除
  deleteTodo,
} from '../controllers/todoController';

//ルーターの作成
const router = express.Router();

//ルート定義
router.get('/', getAllTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

//ルーターのエクスポート
export default router;