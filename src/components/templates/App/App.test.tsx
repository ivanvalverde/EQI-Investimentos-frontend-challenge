import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

jest.mock("recharts", () => {
  return  {};
});

test('renders learn react link', () => {
  render(<App />);
});
