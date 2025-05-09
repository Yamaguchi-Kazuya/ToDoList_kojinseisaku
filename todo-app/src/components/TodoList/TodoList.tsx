import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

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

export interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  startEdit: (id: number, name: string, details: string, tags: string[]) => void;
  editingId: number | null;
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
  selectedTaskId: number | null;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleComplete,
  onDeleteTask,
  startEdit,
  editingId,
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
  selectedTaskId,
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
          handleTaskClick={handleTaskClick} 
          isDetailsVisible={selectedTaskId === todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;