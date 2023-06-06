import { ButtonProps } from '@mui/material';
import React from 'react';



const UIButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  
  return (
    <button className='border border-yellow-100 px-6 py-1' {...rest}>
      {children}
    </button>
  );
};

export default UIButton;
