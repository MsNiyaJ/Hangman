import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

test('buttons are disabled on click', () => {
  const buttons = screen.getAllByTestId('letter');
  const firstBtn = buttons[0];
  expect(firstBtn).toBeInTheDocument();
  fireEvent.click(firstBtn);
  expect(firstBtn.classList.contains('disabled')).toBe(true);
});
