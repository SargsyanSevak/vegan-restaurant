import React from "react";
import Anim from "../components/Anim";
import { SubtitleProps } from "../interfaces/interfaces";

const Subtitle: React.FC<SubtitleProps> = ({ children, color }) => {
  return (
    <Anim>
      <h2 className="subtitle" style={{ color: color }}>
        {children}
      </h2>
    </Anim>
  );
};

export default Subtitle;
