import React from 'react';
import { SubtitleProps } from '../interfaces/interfaces';



const Subtitle: React.FC<SubtitleProps> = ({ children,color }) => {
  return (
    <h2 className="subtitle" style={{color:color}}>
      {children}
    </h2>
  );
};

export default Subtitle;
