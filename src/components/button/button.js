import React from 'react';
import PropTypes from 'prop-types';
import { StyleBtn } from './styles';

function Button({ img, label, color = 'green', handleClick }) {
  return (
    <StyleBtn onClick={handleClick} color={color}>
      <img src={img} className="logo-svg" alt="logo" />
      {label}
    </StyleBtn>
  );
}
Button.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  img: '',
  label: '',
  color: 'green',
  handleClick: () => {},
};

export default Button;
