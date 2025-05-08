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
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDeleteTask }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;