import React from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className={styles.todoItemContainer}>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
    </div>
  );
};