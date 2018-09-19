import React from 'react';

import colors from '../../styles/colors';

const { base } = colors;

const SubmitButton = ({ text, disabled }) => (
  <button
    className={`waves-effect waves-light btn ${base.secondary}`}
    type="submit"
    disabled={disabled}
  >
    {text}
  </button>
);

export default SubmitButton;
