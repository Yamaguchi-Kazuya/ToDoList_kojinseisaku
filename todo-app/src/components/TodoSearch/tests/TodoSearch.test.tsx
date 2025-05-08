import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoSearch from '../TodoSearch'; // テスト対象 (ファイル名が正しいか確認)

describe('TodoSearch Component', () => {
  test('calls onSearch with input value when input changes', () => {
    const handleSearch = jest.fn();
    render(<TodoSearch onSearch={handleSearch} />);
    const inputElement = screen.getByPlaceholderText('タスクを検索') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: '検索ワード' } });
    expect(handleSearch).toHaveBeenCalledWith('検索ワード');
  });
});