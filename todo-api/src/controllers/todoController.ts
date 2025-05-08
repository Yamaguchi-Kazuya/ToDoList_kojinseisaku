//Request 型と Response 型をインポート
import { Request, Response } from 'express';
//query 関数を名前付きインポート
import { query } from '../config/database';

// 全てのTodoアイテムを取得
export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const results = await query('SELECT * FROM todos'); // 'todos'テーブルが存在することを前提
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};

// Todoアイテムを追加
export const addTodo = async (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: 'Text is required' });
  }
  try {
    const results = await query('INSERT INTO todos (text) VALUES (?)', [text]);
    const newTodoId = (results as any).insertId;
    const newTodo = await query('SELECT * FROM todos WHERE id = ?', [newTodoId]);
    res.status(201).json(newTodo[0]);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ message: 'Failed to add todo' });
  }
};

// Todoアイテムを更新
export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  try {
    await query('UPDATE todos SET text = ?, completed = ? WHERE id = ?', [text, completed, id]);
    const updatedTodo = await query('SELECT * FROM todos WHERE id = ?', [id]);
    if (updatedTodo.length === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo[0]);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ message: 'Failed to update todo' });
  }
};

// Todoアイテムを削除
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const results = await query('DELETE FROM todos WHERE id = ?', [id]);
    if ((results as any).affectedRows === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(204).send(); // 成功時はステータスコード 204 No Content を返すのが一般的
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ message: 'Failed to delete todo' });
  }
};