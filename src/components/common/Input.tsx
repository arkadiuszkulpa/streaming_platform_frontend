import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
      {label && (
        <label className="block text-netflix-lightGray text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <input
        className={`bg-netflix-dark text-white border ${
          error ? 'border-red-500' : 'border-gray-700'
        } rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-netflix-red ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;