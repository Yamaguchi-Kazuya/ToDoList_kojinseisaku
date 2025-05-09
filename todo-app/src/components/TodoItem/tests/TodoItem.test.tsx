// src/components/TodoItem/tests/TodoItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';
import { Todo } from '../../../types/todo'; 

const mockTodo = { 
  id: 1, 
  name: '買い物をする',
  details: '牛乳、パン、卵、チーズ',
  text: '買い物をする', 
  completed: false,
  subtasks: [],
  tags: ['買い物','急ぎ'] 
};
const mockToggleComplete = jest.fn();
const mockDeleteTask = jest.fn();
const mockStartEdit = jest.fn();
const mockSetEditName = jest.fn();
const mockSetEditDetails = jest.fn();
const mockSetEditTags = jest.fn();
const mockSaveEdit = jest.fn();
const mockCancelEdit = jest.fn();
const mockAddSubtask = jest.fn();
const mockToggleSubtaskComplete = jest.fn();
const mockDeleteSubtask = jest.fn();
const mockHandleTaskClick = jest.fn();
const mockIsDetailsVisible = false;

describe('TodoItem Component', () => {
  test('renders todo text', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggleComplete={mockToggleComplete}
        onDeleteTask={mockDeleteTask}
        startEdit={mockStartEdit}
        isEditing={false}
        editName=""
        setEditName={mockSetEditName}
        editDetails=""
        setEditDetails={mockSetEditDetails}
        editTags={[]}
        setEditTags={mockSetEditTags}
        saveEdit={mockSaveEdit}
        cancelEdit={mockCancelEdit}
        addSubtask={mockAddSubtask}
        toggleSubtaskComplete={mockToggleSubtaskComplete}
        deleteSubtask={mockDeleteSubtask}
        handleTaskClick={mockHandleTaskClick}
        isDetailsVisible={mockIsDetailsVisible}
      />
    );
    expect(screen.getByText('買い物をする')).toBeInTheDocument();
  });

  test('calls onToggleComplete when checkbox is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggleComplete={mockToggleComplete}
        onDeleteTask={mockDeleteTask}
        startEdit={mockStartEdit}
        isEditing={false}
        editName=""
        setEditName={mockSetEditName}
        editDetails=""
        setEditDetails={mockSetEditDetails}
        editTags={[]}
        setEditTags={mockSetEditTags}
        saveEdit={mockSaveEdit}
        cancelEdit={mockCancelEdit}
        addSubtask={mockAddSubtask}
        toggleSubtaskComplete={mockToggleSubtaskComplete}
        deleteSubtask={mockDeleteSubtask}
        handleTaskClick={mockHandleTaskClick}
        isDetailsVisible={mockIsDetailsVisible}

      />
    );
    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);
    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  test('calls onDeleteTask when delete button is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggleComplete={mockToggleComplete}
        onDeleteTask={mockDeleteTask}
        startEdit={mockStartEdit}
        isEditing={false}
        editName=""
        setEditName={mockSetEditName}
        editDetails=""
        setEditDetails={mockSetEditDetails}
        editTags={[]}
        setEditTags={mockSetEditTags}
        saveEdit={mockSaveEdit}
        cancelEdit={mockCancelEdit}
        addSubtask={mockAddSubtask}
        toggleSubtaskComplete={mockToggleSubtaskComplete}
        deleteSubtask={mockDeleteSubtask}
        handleTaskClick={mockHandleTaskClick}
        isDetailsVisible={mockIsDetailsVisible}
      />
    );
    const deleteButtonElement = screen.getByText('削除');
    fireEvent.click(deleteButtonElement);
    expect(mockDeleteTask).toHaveBeenCalledWith(1);
  });
});