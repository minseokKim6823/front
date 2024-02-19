import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/배포성공!/i);
  expect(linkElement).toBeInTheDocument();
});
