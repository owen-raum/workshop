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
  const baseStyles = 'font-display font-semibold rounded-lg transition-all duration-200 ease-out inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-[#111111] hover:bg-[#1a1a1a] text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    secondary: 'bg-white hover:bg-[#f7f5f1] text-gray-900 border border-[rgba(34,34,34,0.12)] hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    outline: 'border border-[rgba(34,34,34,0.12)] hover:border-[#111111] hover:bg-[#f7f5f1] text-gray-700 hover:text-gray-900 hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
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
