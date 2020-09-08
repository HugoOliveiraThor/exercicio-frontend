import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Wrapper } from './styles'

export default function linkIcon({ label, handleClick }) {
  return (
    <Wrapper>
      <FaRegEdit color="green" size="0.4em" />
      <span onClick={handleClick}>{label}</span>
    </Wrapper>
  );
}
