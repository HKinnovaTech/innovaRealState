import React, { CSSProperties } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  className?: string;
  style?: CSSProperties; // Custom inline styles
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  style = {},
}) => {
  const baseStyles =
    'px-4 py-2 font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary:
      'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  const disabledStyles =
    'opacity-50 cursor-not-allowed focus:ring-0 hover:bg-opacity-50';

  const appliedStyles = `${baseStyles} ${
    variantStyles[variant]
  } ${disabled ? disabledStyles : ''} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={appliedStyles}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
