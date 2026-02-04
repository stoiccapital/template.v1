import React from 'react';
import { typography } from '../../config/design-system';

export type IconNavButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * Icon-only circular navigation button
 * Owns: enabled/disabled color behavior with light/dark mode support
 */
export function IconNavButton({
  type = 'button',
  ariaLabel,
  onClick,
  disabled = false,
  className = '',
  children,
}: IconNavButtonProps) {
  const baseClasses = 'bg-black text-white hover:bg-black active:bg-black dark:bg-white dark:text-black dark:hover:bg-white dark:active:bg-white';

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-xl ${typography.textXs} transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${baseClasses} disabled:opacity-40 disabled:cursor-not-allowed disabled:text-text-secondary disabled:bg-bg-neutral ${className}`}
    >
      {children}
    </button>
  );
}

