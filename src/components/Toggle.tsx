import React, { useState } from 'react';

interface ToggleOption {
  value: string;
  label: string;
}

interface PropertyToggleProps {
  options?: ToggleOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const PropertyToggle: React.FC<PropertyToggleProps> = ({
  options = [
    { value: 'buy', label: 'Buy' },
    { value: 'rent', label: 'Rent' },
    { value: 'lease', label: 'Lease' }
  ],
  defaultValue = 'buy',
  onChange,
  className = ''
}) => {
  const [activeOption, setActiveOption] = useState(defaultValue);

  const handleOptionClick = (value: string) => {
    setActiveOption(value);
    onChange?.(value);
  };

  return (
    <div className={`inline-flex bg-blue-500 rounded-full p-1 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleOptionClick(option.value)}
          className={`
            px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ease-in-out
            ${activeOption === option.value
              ? 'bg-white text-blue-500 shadow-md transform scale-105'
              : 'text-white hover:text-blue-100'
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}



export default PropertyToggle
