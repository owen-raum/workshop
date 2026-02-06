import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-display font-semibold rounded-lg transition-colors inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-[#111111] hover:bg-[#1a1a1a] text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-white hover:bg-[#f7f5f1] text-gray-900 border border-[rgba(34,34,34,0.12)] disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border border-[rgba(34,34,34,0.12)] hover:border-[#111111] hover:bg-[#f7f5f1] text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizeStyles = {
    small: 'px-5 py-2.5 text-sm',
    medium: 'px-7 py-3.5 text-base',
    large: 'px-10 py-5 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
