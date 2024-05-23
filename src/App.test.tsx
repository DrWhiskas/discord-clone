import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './pages/Login/Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Welcome back!/i);
  expect(linkElement).toBeInTheDocument();
});
