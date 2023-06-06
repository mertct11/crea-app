import React, { ChangeEvent } from "react";
import "./Input.style.scss";

type InputProps = {
  placeholder: string;
  onChange: (value: string) => void;
  type: string;
};

const Input: React.FC<InputProps> = ({ placeholder, onChange, type }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div className="input-component">
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  );
};

export default Input;
