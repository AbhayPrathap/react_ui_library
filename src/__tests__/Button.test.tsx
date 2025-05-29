import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button/Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(<Button variant="contained">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button.className).toMatch(/contained/);
  });

  it('applies color class', () => {
    render(<Button color="primary">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button.className).toMatch(/primary/);
  });
}); 