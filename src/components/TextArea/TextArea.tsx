import React, { ChangeEvent } from "react";
import "./TextArea.style.scss";

interface TextAreaProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <textarea
      className="text-area"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextArea;
