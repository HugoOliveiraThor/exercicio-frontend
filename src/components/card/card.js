import React from 'react';
import PropTypes from 'prop-types';
import { SCard } from './styles';

export default function Card({ title, children }) {
  return (
    <SCard>
      <span className="section-title">{title}</span>
      {children}
    </SCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

Card.defaultProps = {
  title: '',
  children: '',
};
