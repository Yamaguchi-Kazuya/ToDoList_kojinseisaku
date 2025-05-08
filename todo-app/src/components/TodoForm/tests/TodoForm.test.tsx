import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../TodoForm'; // テスト対象

describe('TodoForm Component', () => {
  test('calls onAddTask with input text when submitted', () => {
    const handleAddTask = jest.fn();
    render(<TodoForm onAddTask={handleAddTask} />);
    const inputElement = screen.getByPlaceholderText('新しいタスクを入力') as HTMLInputElement;
    const addButtonElement = screen.getByText('追加');

    fireEvent.change(inputElement, { target: { value: '新しいタスク' } });
    fireEvent.click(addButtonElement);

    expect(handleAddTask).toHaveBeenCalledWith('新しいタスク');
    expect(inputElement.value).toBe('');
  });
});