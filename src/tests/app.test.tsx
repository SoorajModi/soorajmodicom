import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';

test('renders name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sooraj Modi/i);
  expect(linkElement).toBeInTheDocument();
});
