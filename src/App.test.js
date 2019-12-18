import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  const { getByTestId } = render(<App />);
  const buttonElement = getByTestId('button');
  expect(buttonElement).toBeInTheDocument();
});
