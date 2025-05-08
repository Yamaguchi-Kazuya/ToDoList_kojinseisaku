import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  startEdit: (id: number, text: string) => void;
  editingId: number | null;
  editText: string;
  setEditText: (text: string) => void;
  saveEdit: (id: number) => void;
  cancelEdit: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onToggleComplete, 
  onDeleteTask,
  startEdit,
  editingId,
  editText,
  setEditText,
  saveEdit,
  cancelEdit,
}) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          startEdit={startEdit}
          isEditing={editingId === todo.id}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;