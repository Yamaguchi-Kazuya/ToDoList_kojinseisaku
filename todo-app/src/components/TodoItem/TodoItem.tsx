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
  startEdit: (id: number, text: string) => void;
  isEditing: boolean;
  editText: string;
  setEditText: (text: string) => void;
  saveEdit: (id: number) => void;
  cancelEdit: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ 
  todo, 
  onToggleComplete, 
  onDeleteTask,
  startEdit,
  isEditing,
  editText,
  setEditText,
  saveEdit,
  cancelEdit,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  return (
    <li className={styles.todoItem}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            className={styles.editInput}
          />
          <button onClick={() => saveEdit(todo.id)} className={styles.saveButton}>保存</button>
          <button onClick={cancelEdit} className={styles.cancelButton}>キャンセル</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
          <button onClick={() => startEdit(todo.id, todo.text)} className={styles.editButton}>編集</button>
          <button onClick={() => onDeleteTask(todo.id)} className={styles.deleteButton}>削除</button>
        </>
      )}
    </li>
  );
};


export default TodoItem;