import React from "react";
import {StyleBtn} from './styles'

export default function Button({img,label, color = 'green', handleClick}) {
  return (
    <StyleBtn onClick={handleClick} color={color}>
      <img src={img} className="logo-svg" />
      {label}
    </StyleBtn>
  );
}
