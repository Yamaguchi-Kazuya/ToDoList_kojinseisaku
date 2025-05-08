import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); // 初期状態は空の配列
  const [nextId, setNextId] = useState(1); // 新しいIDを生成するためのstate
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = (text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: nextId,
        text: text.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNextId(nextId + 1);
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
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
          startEdit={startEdit}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;