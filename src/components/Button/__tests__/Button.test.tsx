import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button.className).toMatch(/contained/);
    expect(button.className).toMatch(/primary/);
    expect(button.className).toMatch(/medium/);
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="outlined">Outlined</Button>);
    expect(screen.getByRole('button')).toHaveClass('outlined');

    rerender(<Button variant="text">Text</Button>);
    expect(screen.getByRole('button')).toHaveClass('text');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('small');

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('large');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Button color="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('secondary');

    rerender(<Button color="error">Error</Button>);
    expect(screen.getByRole('button')).toHaveClass('error');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with start and end icons', () => {
    const StartIcon = () => <span data-testid="start-icon">→</span>;
    const EndIcon = () => <span data-testid="end-icon">←</span>;

    render(
      <Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
        With Icons
      </Button>
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('applies fullWidth prop correctly', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('fullWidth');
  });

  it('handles disabled state', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('forwards additional props to the button element', () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom Button">
        Custom
      </Button>
    );

    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom Button');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Class</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
}); 