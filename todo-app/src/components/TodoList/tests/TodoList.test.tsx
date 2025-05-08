import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList'; // テスト対象
import { Todo } from '../../../../src/App'; // 必要に応じて

const mockTodos: Todo[] = [
  { id: 1, text: 'タスク1', completed: false },
  { id: 2, text: 'タスク2', completed: true },
];
const mockToggleComplete = jest.fn();
const mockDeleteTask = jest.fn();

describe('TodoList Component', () => {
  test('renders a list of todos', () => {
    render(<TodoList todos={mockTodos} onToggleComplete={mockToggleComplete} onDeleteTask={mockDeleteTask} />);
    expect(screen.getByText('タスク1')).toBeInTheDocument();
    expect(screen.getByText('タスク2')).toBeInTheDocument();
  });

  test('renders TodoItem for each todo', () => {
    render(<TodoList todos={mockTodos} onToggleComplete={mockToggleComplete} onDeleteTask={mockDeleteTask} />);
    expect(screen.getAllByRole('listitem').length).toBe(mockTodos.length);
  });
});