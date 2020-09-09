import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

function LinkIcon({ label }) {
  return (
    <Wrapper>
      <FaRegEdit color="green" size="0.4em" />
      <span>{label}</span>
    </Wrapper>
  );
}

LinkIcon.propTypes = {
  label: PropTypes.string,
};

LinkIcon.defaultProps = {
  label: '',
};

export default LinkIcon;
