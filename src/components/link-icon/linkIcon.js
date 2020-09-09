import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function LinkIcon({ label, handleClick }) {
  return (
    <Wrapper>
      <FaRegEdit color="green" size="0.4em" />
      <span onClick={handleClick} aria-hidden="true">
        {label}
      </span>
    </Wrapper>
  );
}

LinkIcon.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
};

LinkIcon.defaultProps = {
  label: '',
  handleClick: () => {},
};
