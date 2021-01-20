import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello LinkGraph', () => {
  render(<App />);
  const helloComponent = screen.getByText(/Hello LinkGraph/i);
  expect(helloComponent).toBeInTheDocument();
});
