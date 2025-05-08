import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header'; // テスト対象

describe('Header Component', () => {
  test('renders the title', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: 'Todo アプリ' })).toBeInTheDocument();
  });
});