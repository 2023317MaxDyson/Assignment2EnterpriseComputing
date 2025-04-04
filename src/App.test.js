import { render, screen } from '@testing-library/react';
import App from './App';

test('If my name is on the page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Max Dyson/i);
  expect(linkElement).toBeInTheDocument();
});
