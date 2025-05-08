import React from 'react';
import styles from './TodoItem.module.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDeleteTask }) => {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
      <button onClick={() => onDeleteTask(todo.id)}>削除</button>
    </li>
  );
};

export default TodoItem;