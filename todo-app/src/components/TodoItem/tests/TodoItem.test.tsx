import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem'; // テスト対象

const mockTodo = { id: 1, text: 'テストタスク', completed: false };
const mockToggleComplete = jest.fn();
const mockDeleteTask = jest.fn();

describe('TodoItem Component', () => {
  test('renders todo text', () => {
    render(<TodoItem todo={mockTodo} onToggleComplete={mockToggleComplete} onDeleteTask={mockDeleteTask} />);
    expect(screen.getByText('テストタスク')).toBeInTheDocument();
  });

  test('calls onToggleComplete when checkbox is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggleComplete={mockToggleComplete} onDeleteTask={mockDeleteTask} />);
    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);
    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  test('calls onDeleteTask when delete button is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggleComplete={mockToggleComplete} onDeleteTask={mockDeleteTask} />);
    const deleteButtonElement = screen.getByText('削除');
    fireEvent.click(deleteButtonElement);
    expect(mockDeleteTask).toHaveBeenCalledWith(1);
  });
});