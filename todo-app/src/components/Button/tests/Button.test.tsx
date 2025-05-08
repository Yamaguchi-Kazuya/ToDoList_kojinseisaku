import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button'; // テスト対象のコンポーネント

describe('Button Component', () => {
  test('renders children correctly', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    screen.getByText('Click Me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});