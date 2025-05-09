import React, { useState } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAddTask: (name: string, details: string, tags: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTask }) => {
  const [nameInput, setNameInput] = useState('');
  const [detailsInput, setDetailsInput] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameInput.trim()) {
      onAddTask(nameInput, detailsInput, tagsInput);
      setNameInput('');
      setDetailsInput('');
      setTagsInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="タスク名"
        className={styles.input}
        required
      />
      <textarea
        value={detailsInput}
        onChange={(e) => setDetailsInput(e.target.value)}
        placeholder="詳細"
        className={styles.textarea}
      />
      <input
        type="text"
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
        placeholder="タグ (カンマ区切り)"
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>追加</button>
    </form>
  );
};

export default TodoForm;