import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer'; // テスト対象

describe('Footer Component', () => {
  test('renders the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Todo アプリケーション/i)).toBeInTheDocument();
  });
});