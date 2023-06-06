import React,{ChangeEvent} from "react";
interface InputProps {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  }
const UIInput: React.FC<InputProps> = ({ placeholder, type = 'text', value, onChange }) => {
  return (
    <div className="w-full h-full py-4 text-white reletive">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-full outline-none border-x-2 border-y-2 border-[#FFCE6D] pl-6 bg-inherit px-6 py-4"
      />
      
    </div>
  );
};

export default UIInput;
