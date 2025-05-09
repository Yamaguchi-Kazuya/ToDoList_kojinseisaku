import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList'; // テスト対象
import { Todo } from '../../../../src/App'; // 必要に応じて

// モックTodoデータ
const mockTodos: Todo[] = [
  {
    id: 1,
    name: 'タスク1',
    completed: false,
    details: '詳細1',
    tags: ['home'],
    subtasks: [
      { id: 1, text: 'サブタスク1-1', completed: false }
    ],
  },
  {
    id: 2,
    name: 'タスク2',
    completed: true,
    details: '詳細2',
    tags: ['work'],
    subtasks: [],
  },
];

// モック関数定義
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
const mockSelectedTaskId = 1;

describe('TodoList Component', () => {
  test('renders a list of todos', () => {
    render(
      <TodoList 
        todos={mockTodos} 
        onToggleComplete={mockToggleComplete} 
        onDeleteTask={mockDeleteTask} 
        startEdit={mockStartEdit}
        editingId={null}
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
        selectedTaskId={mockSelectedTaskId}
      />
    );
    expect(screen.getByText('タスク1')).toBeInTheDocument();
    expect(screen.getByText('タスク2')).toBeInTheDocument();
  });

  test('renders TodoItem for each todo', () => {
    render(
      <TodoList
        todos={mockTodos} 
        onToggleComplete={mockToggleComplete} 
        onDeleteTask={mockDeleteTask} 
        startEdit={mockStartEdit}
        editingId={null}
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
        selectedTaskId={mockSelectedTaskId}
      />
    );
    expect(screen.getAllByRole('listitem').length).toBe(mockTodos.length);
  });
});
