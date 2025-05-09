import React, { useState } from 'react';
import styles from './TodoItem.module.css';

interface Subtask {
  id: number;
  text: string;
  completed: boolean;
}

interface Todo {
  id: number;
  name: string;
  details: string;
  tags: string[];
  completed: boolean;
  subtasks: Subtask[];
}

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  startEdit: (id: number, name: string, details: string, tags: string[]) => void;
  isEditing: boolean;
  editName: string;
  setEditName: (name: string) => void;
  editDetails: string;
  setEditDetails: (details: string) => void;
  editTags: string[];
  setEditTags: (tags: string[]) => void;
  saveEdit: (id: number) => void;
  cancelEdit: () => void;
  addSubtask: (todoId: number, text: string) => void;
  toggleSubtaskComplete: (todoId: number, subtaskId: number) => void;
  deleteSubtask: (todoId: number, subtaskId: number) => void;
  handleTaskClick: (id: number) => void; 
  isDetailsVisible: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDeleteTask,
  startEdit,
  isEditing,
  editName,
  setEditName,
  editDetails,
  setEditDetails,
  editTags,
  setEditTags,
  saveEdit,
  cancelEdit,
  addSubtask,
  toggleSubtaskComplete,
  deleteSubtask,
  handleTaskClick, 
  isDetailsVisible,
}) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditDetails(event.target.value);
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTags(event.target.value.split(',').map((tag) => tag.trim()));
  };

  const [newSubtaskText, setNewSubtaskText] = useState('');

  const handleAddSubtask = () => {
    addSubtask(todo.id, newSubtaskText);
    setNewSubtaskText('');
  };

  return (
    <li className={styles.todoItem}>
      {isEditing ? (
        <div className={styles.editContainer}>
          <input
            type="text"
            value={editName}
            onChange={handleNameChange}
            placeholder="タスク名"
            className={styles.editInput}
            required
          />
          <textarea
            value={editDetails}
            onChange={handleDetailsChange}
            placeholder="詳細"
            className={styles.editTextArea}
          />
          <input
            type="text"
            value={editTags.join(', ')}
            onChange={handleTagsChange}
            placeholder="タグ (カンマ区切り)"
            className={styles.editInput}
          />
          <div className={styles.editActions}>
            <button onClick={() => saveEdit(todo.id)} className={styles.saveButton}>保存</button>
            <button onClick={cancelEdit} className={styles.cancelButton}>キャンセル</button>
          </div>
        </div>
      ) : (
        <div className={styles.viewContainer}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <div className={styles.textContainer}>
            <span className={todo.completed ? styles.completed : ''}>{todo.name}</span>
            {todo.details && <div className={styles.details}>{todo.details}</div>}
            {todo.tags.length > 0 && (
              <div className={styles.tags}>
                {todo.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
          <div className={styles.actions}>
            <button onClick={() => startEdit(todo.id, todo.name, todo.details, todo.tags)} className={styles.editButton}>編集</button>
            <button onClick={() => onDeleteTask(todo.id)} className={styles.deleteButton}>削除</button>
          </div>

          <div className={styles.subtaskList}>
            {todo.subtasks.map((subtask) => (
              <div key={subtask.id} className={styles.subtaskItem}>
                <input
                  type="checkbox"
                  checked={subtask.completed}
                  onChange={() => toggleSubtaskComplete(todo.id, subtask.id)}
                />
                <span className={subtask.completed ? styles.subtaskCompleted : ''}>{subtask.text}</span>
                <button onClick={() => deleteSubtask(todo.id, subtask.id)} className={styles.deleteSubtaskButton}>削除</button>
              </div>
            ))}
            <div className={styles.addSubtask}>
              <input
                type="text"
                value={newSubtaskText}
                onChange={(e) => setNewSubtaskText(e.target.value)}
                placeholder="新しいサブタスク"
              />
              <button onClick={handleAddSubtask} className={styles.addSubtaskButton}>+</button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;