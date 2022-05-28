import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ user: { average, name, attendance } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>{name}</div>
      <p>{attendance}</p>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
