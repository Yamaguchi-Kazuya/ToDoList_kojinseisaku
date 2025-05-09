import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

interface Subtask {
  id: number;
  text: string;
  completed: boolean;
}

export interface Todo {
  id: number;
  name: string; // タスク名
  details: string; // 詳細
  tags: string[]; // タグ
  completed: boolean;
  subtasks: Subtask[];
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextTodoId, setNextTodoId] = useState(1);
  const [nextSubtaskId, setNextSubtaskId] = useState(1);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editDetails, setEditDetails] = useState('');
  const [editTags, setEditTags] = useState<string[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null); 

  const handleAddTask = (name: string, details: string, tagsString: string) => {
    if (name.trim()) {
      const newTodo: Todo = {
        id: nextTodoId,
        name: name.trim(),
        details: details.trim(),
        tags: tagsString.split(',').map((tag) => tag.trim()).filter(Boolean),
        completed: false,
        subtasks: [],
      };
      setTodos([...todos, newTodo]);
      setNextTodoId(nextTodoId + 1);
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

  const startEdit = (id: number, name: string, details: string, tags: string[]) => {
    setEditingId(id);
    setEditName(name);
    setEditDetails(details);
    setEditTags(tags);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              name: editName.trim(),
              details: editDetails.trim(),
              tags: editTags.map((tag) => tag.trim()).filter(Boolean),
            }
          : todo
      )
    );
    setEditingId(null);
    setEditName('');
    setEditDetails('');
    setEditTags([]);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName('');
    setEditDetails('');
    setEditTags([]);
  };
  

  const addSubtask = (todoId: number, text: string) => {
    if (text.trim()) {
      const newSubtask: Subtask = {
        id: nextSubtaskId,
        text: text.trim(),
        completed: false,
      };
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, subtasks: [...todo.subtasks, newSubtask] } : todo
        )
      );
      setNextSubtaskId(nextSubtaskId + 1);
    }
  };

  const toggleSubtaskComplete = (todoId: number, subtaskId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subtasks: todo.subtasks.map((subtask) =>
                subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
              ),
            }
          : todo
      )
    );
  };

  const deleteSubtask = (todoId: number, subtaskId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subtasks: todo.subtasks.filter((subtask) => subtask.id !== subtaskId),
            }
          : todo
      )
    );
  };

  const handleTaskClick = (id: number) => { 
    setSelectedTaskId(prevId => prevId === id ? null : id);
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
          editName={editName}
          setEditName={setEditName}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          editTags={editTags}
          setEditTags={setEditTags}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          addSubtask={addSubtask}
          toggleSubtaskComplete={toggleSubtaskComplete}
          deleteSubtask={deleteSubtask}
          handleTaskClick={handleTaskClick} // 追加
          selectedTaskId={selectedTaskId} // 追加
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;