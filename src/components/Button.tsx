import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center gap-2 transition-all duration-250 cursor-pointer';

  const variantClasses = {
    primary: 'btn-primary bg-[#604B33] text-white hover:bg-[#4a3728] hover:-translate-y-0.5',
    secondary: 'bg-transparent border-2 border-[#604B33] text-[#604B33] hover:bg-[#604B33] hover:text-white',
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-4 text-xl',
    large: 'px-10 py-5 text-xl',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;