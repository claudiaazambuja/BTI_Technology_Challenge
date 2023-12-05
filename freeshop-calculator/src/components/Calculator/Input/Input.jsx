import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, value, onChange, onKeyDown, isOpen }, ref) => (
  <div>
    {isOpen && (
      <>
        <label htmlFor={label}>{label}:</label>
        <input
          type="number"
          id={label.toLowerCase().replace(/\s+/g, '-')}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={ref}
        />
      </>
    )}
  </div>
));

export default Input;
