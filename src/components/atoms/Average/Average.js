import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'assets/styles/theme';

import { Wrapper } from './Average.styles';

const changeAverageColor = (value) => {
  console.log(value);
  if (value <= 2) return theme.colors.error;
  else if (value < 4) return theme.colors.warning;
  return theme.colors.success;
};

const Average = ({ average }) => {
  return <Wrapper averageColor={changeAverageColor(parseInt(average))}>{average}</Wrapper>;
};

Average.propTypes = {
  value: PropTypes.number,
};

export default Average;
