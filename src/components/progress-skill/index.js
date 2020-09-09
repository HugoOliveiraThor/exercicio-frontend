import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressSkills({ label, percentage }) {
  function defineSkills(perc) {
    // eslint-disable-next-line no-nested-ternary
    return perc >= 90
      ? 'Expert'
      : perc < 90 && perc >= 80
      ? 'Pro'
      : 'Intermediate';
  }

  return (
    <div className="column">
      <div className="row no-center space-between">
        <span>{label}</span>
        <span className="default-text">{defineSkills(percentage)}</span>
      </div>
      <progress max="100" value={percentage} />
    </div>
  );
}

ProgressSkills.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

ProgressSkills.defaultProps = {
  label: '',
  percentage: 0,
};
