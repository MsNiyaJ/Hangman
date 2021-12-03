import React from 'react';
import { render, screen, getAllByTestId } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

test('renders hangman title', () => {
  const title = screen.getByText(/hangman/i);
  expect(title).toBeInTheDocument();
});

test('renders 26 letter buttons', () => {
  const buttons = screen.getAllByTestId('letter');
  expect(buttons.length).toBe(26);
  buttons.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});
