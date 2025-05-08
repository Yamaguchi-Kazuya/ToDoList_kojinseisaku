import React, { useState } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAddTask: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputText.trim()) {
      onAddTask(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="新しいタスクを入力"
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default TodoForm;