import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[color],
        {
          [styles.fullWidth]: fullWidth,
        },
        className
      )}
      {...props}
    >
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
  );
}; 