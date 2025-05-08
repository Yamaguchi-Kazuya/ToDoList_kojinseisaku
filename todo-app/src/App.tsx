import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string; // または Date 型
  updatedAt: string; // または Date 型
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const apiUrl = 'http://localhost:3001/api/todos'; // バックエンドのAPIエンドポイント

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
      // エラー処理を実装（例：エラーメッセージの表示）
    }
  };

  const handleAddTask = async (text: string) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newTodo: Todo = await response.json();
      setTodos([...todos, newTodo]); // 新しいTodoを既存の配列の末尾に追加
    } catch (error) {
      console.error('Failed to add todo:', error);
      // エラー処理を実装
    }
  };

  const handleToggleComplete = async (id: number) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      try {
        const response = await fetch(`${apiUrl}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ completed: !todoToUpdate.completed }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const updatedTodo: Todo = await response.json();
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      } catch (error) {
        console.error('Failed to toggle complete:', error);
        // エラー処理を実装
      }
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
      // エラー処理を実装
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <TodoForm onAddTask={handleAddTask} />
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;