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
  const baseStyles = 'font-display font-semibold rounded-xl transition-colors inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-warm-600 hover:bg-warm-700 text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-stone-900 hover:bg-stone-800 text-white disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-stone-300 hover:border-warm-600 hover:bg-warm-50 text-stone-700 hover:text-warm-700 disabled:opacity-50 disabled:cursor-not-allowed',
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
