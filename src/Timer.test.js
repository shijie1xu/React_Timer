import { render, screen } from '@testing-library/react';
import Timer from './Timer';

test('renders Timer', () => {
  render(<Timer />);
  const linkElement = screen.getByText(/Start/i);
  expect(linkElement).toBeInTheDocument();
});
