import React, { useState, ChangeEvent } from 'react';
import styles from './TodoSearch.module.css';

interface TodoSearchProps {
  onSearch: (searchTerm: string) => void;
}

const TodoSearch: React.FC<TodoSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={styles.todoSearch}>
      <input
        type="text"
        placeholder="タスクを検索"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default TodoSearch;